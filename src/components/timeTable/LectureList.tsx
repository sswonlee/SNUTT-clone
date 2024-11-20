import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Bookmark from '../../assets/LectureList/Bookmark.svg';
import Location from '../../assets/LectureList/Location.svg';
import Time from '../../assets/LectureList/Time.svg';
import type { Lecture } from '../../types';
import { TableContext } from '../TimeTableLayout';

const LectureList = () => {
  console.log('hello');
  const days = ['월', '화', '수', '목', '금'];
  const lecturePlace = (lecture: Lecture) => {
    return Array.from(
      new Set(lecture.class_time_json.map((time) => time.place)),
    );
  };
  const navigate = useNavigate();

  const { table } = useContext(TableContext);
  if (table !== null) {
    const { lecture_list: list, title } = table;
    return (
      <>
        <div className="flex w-full h-full flex-col justify-start">
          <div className="flex h-10 w-full items-center px-4 border-b border-solid border-neutral-200 box-border">
            <div className="flex w-full items-center justify-between">
              <button
                onClick={() => {
                  navigate(`/timetable/${table._id}`);
                }}
                className="flex items-center hover:text-zinc-300 duration-200"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="mr-1" />
                <p className="font-bold">{title}</p>
              </button>
              <button
                className="ml-auto items-center pb-[5px]"
                onClick={() => {
                  navigate('/timetable/new');
                }}
              >
                <p className="text-3xl hover:text-zinc-300 duration-200">+</p>
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-y-auto overscroll-contain">
            {list.map((lecture, i) => (
              <div
                onClick={() => {
                  navigate(`/timetable/${table._id}/lectures/${lecture._id}`);
                }}
                key={i}
                className="flex flex-col p-4 space-y-2 border-b-[1px] border-zinc-200"
              >
                <div className="flex justify-between">
                  <div className="font-bold">{lecture.course_title}</div>
                  <div>
                    {lecture.instructor} / {lecture.credit}학점
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={Bookmark} className="w-4" />
                  <div className="text-sm">
                    {lecture.category !== '' ? `${lecture.category}, ` : ''}
                    {lecture.department}, {lecture.academic_year}
                  </div>
                </div>
                <div className="flex w-full items-start space-x-2">
                  <img src={Time} className="mt-[2px] w-4" />
                  <div className="text-sm flex flex-wrap justify-start">
                    {lecture.class_time_json.map((time, j) => {
                      if (j === lecture.class_time_json.length - 1) {
                        return (
                          <div key={j}>
                            {days[time.day]}({time.start_time}~{time.end_time})
                          </div>
                        );
                      } else {
                        return (
                          <div key={j} className="flex w-fit">
                            {days[time.day]}({time.start_time}~{time.end_time}
                            ),&nbsp;
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="flex w-full items-start space-x-2">
                  <img src={Location} className="w-4" />
                  <div className="flex text-sm">
                    {lecturePlace(lecture).map((place, j) => {
                      if (j === lecturePlace(lecture).length - 1)
                        return <div key={j}>{place}</div>;
                      else return <div key={j}>{place},&nbsp;</div>;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default LectureList;
