import type { Dispatch, SetStateAction } from 'react';

import Back from '../assets/Left.png';
import type { Lecture } from '../types';

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
  return (
    <>
      {display ? (
        <div className="absolute w-full h-full bg-white top-0 flex flex-col pt-10">
          <div className="fixed top-0 flex h-10 w-full bg-white items-center px-4 border-b border-solid border-neutral-200 box-border">
            <div className="flex items-center">
              <button onClick={close} className="w-4 h-4">
                <img src={Back} />
              </button>
              <div className="w-3"></div>
              <p className="text-[17px] font-bold">{title}</p>
            </div>
          </div>
          {list.map((lecture, i) => (
            <div
              onClick={() => {
                setLecture(lecture);
              }}
              key={i}
            >
              <div>{lecture.course_title}</div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default LectureListModal;
