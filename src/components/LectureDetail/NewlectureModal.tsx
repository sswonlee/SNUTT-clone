import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useToken from '../../utils/useToken';
import { TableContext } from '../TimeTableLayout';
import { MenuGroup } from './LectureInfo';

const NewLectureModal = () => {
  const { table } = useContext(TableContext);
  const token = useToken();
  const navigate = useNavigate();
  const [title, setTitle] = useState('새로운 강의');
  const [professor, setProfessor] = useState<string | null>(null);
  const [credit, setCredit] = useState(0);
  const [remark, setRemark] = useState<string | null>(null);

  const handleSave = () => {
    if (token !== undefined && table !== null) {
      fetch(
        `https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/tables/${table._id}/lecture`,
        {
          method: 'POST',
          headers: {
            'x-access-token': token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            course_title: title,
            instructor: professor,
            credit: credit,
            class_time_json: [
              {
                day: '2',
                place: '25-101',
                startMinute: 1140,
                endMinute: 1230,
                start_time: '19:00',
                end_time: '20:30',
                len: 1,
                start: 0,
              },
            ],
            remark: remark,
            color: {
              bg: 'black',
              fg: 'black',
            },
            colorIndex: 8,
            is_forced: true,
          }),
        },
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('강의 추가 실패:');
          }
        })
        .then(() => {
          navigate(`/timetable/${table._id}`);
          window.location.reload();
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  };

  if (table !== null) {
    return (
      <>
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between h-fit py-2 px-4 font-bold border-b border-zinc-300">
            <p className="relative w-full text-center">
              <Link
                to={`/timetable/${table._id}/lectures`}
                className="absolute left-0 flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                <p className="font-bold">강의 목록</p>
              </Link>
              강의 추가
              <button className="absolute right-0" onClick={handleSave}>
                <p>저장</p>
              </button>
            </p>
          </div>
          <div className="flex flex-col w-full h-full pt-4 space-y-2 bg-zinc-100">
            <MenuGroup
              menuArray={[
                {
                  title: '강의명',
                  info: (
                    <input
                      type="text"
                      className="w-full appearance-none focus:outline-none text-black font-medium"
                      defaultValue={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    ></input>
                  ),
                },
                {
                  title: '교수',
                  info: (
                    <input
                      type="text"
                      className="w-full appearance-none focus:outline-none text-black font-medium"
                      placeholder="(없음)"
                      onChange={(e) => {
                        setProfessor(e.target.value);
                      }}
                    ></input>
                  ),
                },
                {
                  title: '학점',
                  info: (
                    <input
                      type="number"
                      className="w-full appearance-none focus:outline-none text-black font-medium"
                      defaultValue={0}
                      onChange={(e) => {
                        setCredit(Number(e.target.value));
                      }}
                    ></input>
                  ),
                },
                {
                  title: '색',
                  info: (
                    <div className="flex border border-solid border-black">
                      <div className="w-5 h-5 bg-white"></div>
                      <div
                        className="w-5 h-5"
                        style={{ backgroundColor: ' #4ade80' }}
                      ></div>
                    </div>
                  ),
                },
              ]}
            ></MenuGroup>
            <MenuGroup
              menuArray={[
                {
                  title: '비고',
                  info: (
                    <input
                      type="text"
                      className="w-full appearance-none focus:outline-none text-black font-medium"
                      placeholder="(없음)"
                      onChange={(e) => {
                        setRemark(e.target.value);
                      }}
                    ></input>
                  ),
                },
              ]}
            ></MenuGroup>
            <MenuGroup
              menuArray={[
                { title: '시간 및 장소', info: ' ' },
                { title: '시간', info: '수 19:00 ~ 20:30' },
                { title: '장소', info: '(없음)' },
              ]}
            ></MenuGroup>
            <button className="w-full h-10 bg-white hover:bg-zinc-300 duration-200">
              + 시간 추가
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default NewLectureModal;
