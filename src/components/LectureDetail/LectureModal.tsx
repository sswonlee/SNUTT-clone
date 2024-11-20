import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

import Back from '../../assets/Left.png';
import type { Lecture } from '../../types';
import useToken from '../../utils/useToken';
import { TableContext } from '../TimeTableLayout';
import LectureInfo from './LectureInfo';

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
    )
      return (
        <div>
          <div className="flex flex-col bg-neutral-200 w-full h-full gap-3">
            <div className="h-fit py-2 px-4 bg-white">
              <div className="flex items-center">
                <Link
                  to={`/timetable/${tableID}`}
                  className="flex items-center space-x-2"
                >
                  <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
                  <p className="font-bold">강의 상세 보기</p>
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-white">
              <LectureInfo title={'강의명'} info={lecture.course_title} />
              <LectureInfo title={'교수'} info={lecture.instructor} />
              <div className="flex bg-white w-full h-fit justify-center px-4">
                <div className="flex w-[100px] h-10 items-center text-neutral-500 text-[13px] flex-shrink-0">
                  색상
                </div>
                <div className="flex py-[10px] items-center w-full">
                  <div className="flex border border-solid border-black">
                    <div className="w-5 h-5 bg-white"></div>
                    <div
                      className="w-5 h-5"
                      style={{ backgroundColor: color[lecture.colorIndex - 1] }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white">
              <LectureInfo title={'학과'} info={lecture.department} />
              <LectureInfo title={'학년'} info={lecture.academic_year} />
              <LectureInfo title={'학점'} info={lecture.credit} />
              <LectureInfo title={'분류'} info={lecture.category} />
              <LectureInfo title={'구분'} info={lecture.classification} />
              <LectureInfo title={'강좌번호'} info={lecture.course_number} />
              <LectureInfo title={'분반번호'} info={lecture.lecture_number} />
              <LectureInfo title={'정원'} info={lecture.quota} />
              <LectureInfo title={'비고'} info={lecture.remark} />
            </div>
            <div className="flex flex-col pb-4 bg-white">
              <div className="flex w-full h-fit px-4 py-[10px] text-neutral-500 text-[14px]">
                시간 및 장소
              </div>
              {lecture.class_time_json.map((time, i) => (
                <div key={i}>
                  <div className="flex w-full h-fit px-4 py-1">
                    <div className="flex w-[80px] items-center text-neutral-500 text-[14px] flex-shrink-0">
                      시간
                    </div>
                    <div className="flex items-center w-full text-[14px]">
                      {days[time.day]}({time.start_time}~{time.end_time})
                    </div>
                  </div>
                  <div className="flex w-full h-fit px-4 py-1">
                    <div className="flex w-[80px] items-center text-neutral-500 text-[14px] flex-shrink-0">
                      장소
                    </div>
                    <div className="flex items-center w-full text-[14px]">
                      {time.place}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex w-full bg-white text-[14px] text-red-500 justify-center items-center py-[10px]">
              삭제
            </button>
          </div>
        </div>
      );
  }
};

export default LectureModal;
