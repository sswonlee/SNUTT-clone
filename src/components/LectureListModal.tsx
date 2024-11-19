import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import Bookmark from '../assets/LectureList/Bookmark.svg';
import Location from '../assets/LectureList/Location.svg';
import Time from '../assets/LectureList/Time.svg';
import Back from '../assets/Left.png';
import type { Lecture } from '../types';
import NewLectureModal from './NewlectureModal';

const LectureListModal = ({
  list,
  display,
  title,
  close,
  setLecture,
}: {
  list: Array<Lecture>;
  display: boolean;
  title: string;
  close: () => void;
  setLecture: Dispatch<SetStateAction<Lecture | undefined>>;
}) => {
  const days = ['월', '화', '수', '목', '금'];
  const [modal, setModal] = useState(false);
  const lecturePlace = (lecture: Lecture) => {
    return Array.from(
      new Set(lecture.class_time_json.map((time) => time.place)),
    );
  };

  return (
    <>
      {display ? (
        modal ? (
          <NewLectureModal setModal={setModal} />
        ) : (
          <div className="absolute w-full h-full bg-white top-0 flex flex-col pt-10">
            <div className="fixed top-0 flex h-10 w-full bg-white items-center px-4 border-b border-solid border-neutral-200 box-border">
              <div className="flex w-full items-center">
                <button onClick={close} className="w-4 h-4">
                  <img src={Back} />
                </button>
                <div className="w-3"></div>
                <p className="text-[17px] font-bold">{title}</p>
                <button
                  className="ml-auto items-center pb-[5px]"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <p className="text-[30px] font-bold">+</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col overflow-auto overscroll-contain">
              {list.map((lecture, i) => (
                <div
                  onClick={() => {
                    setLecture(lecture);
                  }}
                  key={i}
                  className="flex flex-col pl-4"
                >
                  <div className="flex">
                    <div className="font-bold">{lecture.course_title}</div>
                    <div className="ml-auto">
                      {lecture.instructor} / {lecture.credit}학점
                    </div>
                  </div>
                  <div className="flex">
                    <img src={Bookmark} className="mt-[2px] w-4 h-4" />
                    <div className="ml-2 text-[13px]">
                      {lecture.category !== '' ? `${lecture.category}, ` : ''}
                      {lecture.department}, {lecture.academic_year}
                    </div>
                  </div>
                  <div className="flex">
                    <img src={Time} className="mt-[2px] w-4 h-4" />
                    <div className="ml-2 text-[13px] flex flex-row">
                      {lecture.class_time_json.map((time, j) => {
                        if (j === lecture.class_time_json.length - 1)
                          return (
                            <div key={j}>
                              {days[time.day]}({time.start_time}~{time.end_time}
                              )
                            </div>
                          );
                        else
                          return (
                            <div key={j}>
                              {days[time.day]}({time.start_time}~{time.end_time}
                              ),&nbsp;
                            </div>
                          );
                      })}
                    </div>
                  </div>
                  <div className="flex">
                    <img src={Location} className="mt-[2px] w-4 h-4" />
                    <div className="ml-2 flex flex-row text-[13px]">
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
        )
      ) : null}
    </>
  );
};

export default LectureListModal;
