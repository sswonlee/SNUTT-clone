import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import type { Lecture } from '../../types';
import useToken from '../../utils/useToken';
import { TableContext } from '../TimeTableLayout';
import { MenuGroup } from './LectureInfo';

const LectureModal = () => {
  const { lectureID, tableID } = useParams();
  const { table } = useContext(TableContext);
  const token = useToken();
  if (table !== null && token !== undefined) {
    const { lecture_list }: { lecture_list: Lecture[] } = table;
    const lecture = lecture_list.filter((e: Lecture) => e._id === lectureID)[0];
    const color = [
      '#E54459',
      '#F58D3D',
      '#FAC52D',
      '#A6D930',
      '#2BC366',
      '#1BD0C9',
      '#1D99E9',
      '#4F48C4',
      '#AF56B3',
    ];
    const days = ['월', '화', '수', '목', '금'];
    if (
      lecture !== undefined &&
      tableID !== undefined &&
      lectureID !== undefined
    ) {
      let timeAndPlaceArr: {
        title: string;
        info: string | number | React.JSX.Element;
      }[] = [];
      lecture.class_time_json.forEach((time) => {
        timeAndPlaceArr = [
          ...timeAndPlaceArr,
          {
            title: '시간',
            info: `${days.filter((e) => e === time.day.toString()).toString()}(${time.start_time}~${time.end_time})`,
          },
          { title: '장소', info: time.place },
        ];
      });

      return (
        <div className="h-full overflow-y-auto">
          <div className="flex flex-col bg-neutral-200 w-full h-full">
            <div className="h-fit py-2 px-4 bg-white">
              <Link
                to={`/timetable/${tableID}`}
                className="flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                <p className="font-bold">강의 상세 보기</p>
              </Link>
            </div>
            <div className="overflow-y-auto space-y-3">
              <MenuGroup
                menuArray={[
                  { title: '강의명', info: lecture.course_title },
                  { title: '교수', info: lecture.instructor },
                  {
                    title: '색상',
                    info: (
                      <div className="flex border border-solid border-black">
                        <div className="w-5 h-5 bg-white"></div>
                        <div
                          className="w-5 h-5"
                          style={{
                            backgroundColor: color[lecture.colorIndex - 1],
                          }}
                        ></div>
                      </div>
                    ),
                  },
                ]}
              ></MenuGroup>
              <MenuGroup
                menuArray={[
                  { title: '학과', info: lecture.department },
                  { title: '학년', info: lecture.academic_year },
                  { title: '학점', info: lecture.credit },
                  { title: '분류', info: lecture.category },
                  { title: '구분', info: lecture.classification },
                  { title: '강좌번호', info: lecture.course_number },
                  { title: '분반번호', info: lecture.lecture_number },
                  { title: '정원', info: lecture.quota },
                  { title: '비고', info: lecture.remark },
                ]}
              ></MenuGroup>
              <MenuGroup
                menuArray={[
                  { title: '시간 및 장소', info: ' ' },
                  ...timeAndPlaceArr,
                ]}
              ></MenuGroup>
              <button className="flex w-full h-10 p-2 bg-white text-sm text-red-500 justify-center items-center hover:bg-red-200 duration-200">
                삭제
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default LectureModal;
