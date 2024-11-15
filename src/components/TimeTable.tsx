import { useEffect, useState } from 'react';

import Alarm from '../assets/Alarm.svg';
import Drawer from '../assets/Drawer.svg';
import List from '../assets/List.svg';
import Share from '../assets/Share.svg';
import type { Lecture, Table } from '../types';
import LectureModal from './LectureDetail/LectureModal';
import LectureListModal from './LectureListModal';

const TimeTable = ({ token }: { token: string }) => {
  const [table, setTable] = useState<Table>();
  const [credit, setCredit] = useState(0);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>();
  const [listModal, setListModal] = useState(false);
  const HOUR_NUMBER = 12;
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
  const deleteLecture = () => {
    if (table !== undefined) {
      let tmp = table.lecture_list;
      tmp = tmp.filter((lecture) => lecture._id !== selectedLecture?._id);
      setTable({ ...table, lecture_list: tmp });
      let cr = 0;
      tmp.map((item) => {
        cr += item.credit;
      });
      setCredit(cr);
    }
  };

  useEffect(() => {
    fetch(
      'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/tables/recent',
      {
        method: 'GET',
        headers: {
          'x-access-token': token,
        },
      },
    )
      .then((res) => res.json())
      .then((data: Table) => {
        setTable(data);
        let cr = 0;
        data.lecture_list.map((item) => {
          cr += item.credit;
        });
        setCredit(cr);
      })
      .catch((err: unknown) => {
        window.alert(err);
      });
  }, [token]);

  return (
    <>
      <div className="flex h-10 w-full items-center justify-between px-4">
        <div className="flex h-full items-center">
          <button className="w-[26px] h-[26px]">
            <img src={Drawer} />
          </button>
          <div className="w-3"></div>
          <div className="text-[17px] font-bold">{table?.title}</div>
          <div className="w-2"></div>
          <div className="text-xs font-normal text-gray">
            ({`${credit}학점`})
          </div>
        </div>
        <div className="flex h-full items-center gap-[15px]">
          <button
            onClick={() => {
              setListModal(true);
            }}
          >
            <img className="w-5 h-5" src={List} />
          </button>
          <button>
            <img className="w-5 h-5" src={Share} />
          </button>
          <button>
            <img className="w-6 h-6" src={Alarm} />
          </button>
        </div>
      </div>
      <div
        className={`grid flex-grow grid-cols-[20px_repeat(5,1fr)] grid-rows-[32px_repeat(${12 * HOUR_NUMBER},1fr)]`}
      >
        <div className="border-b border-t border-solid border-gray"></div>
        {Array.from(['월', '화', '수', '목', '금'], (day) => (
          <div
            key={day}
            className="flex justify-center items-center text-[12px] text-gray border-b border-t border-l border-solid border-gray"
          >
            {day}
          </div>
        ))}
        {Array.from(Array(HOUR_NUMBER), (_, i) => (
          <div
            key={i}
            className="text-right pt-1 pr-1 text-[12px] text-gray col-start-1 col-end-2 border-b border-solid border-gray"
            style={{
              gridRowStart: 12 * i + 2,
              gridRowEnd: 12 * i + 14,
            }}
          >
            {i + 9}
          </div>
        ))}
        {Array.from(Array(HOUR_NUMBER * 2), (_1, i) =>
          Array.from(Array(5), (_2, j) => (
            <div
              key={i - j}
              className="border-b border-l border-solid border-gray"
              style={{
                gridColumnStart: j + 2,
                gridColumnEnd: j + 3,
                gridRowStart: 6 * i + 2,
                gridRowEnd: 6 * i + 8,
              }}
            ></div>
          )),
        )}
        {table?.lecture_list.map((lecture) =>
          lecture.class_time_json.map((time, i) => (
            <button
              onClick={() => {
                setSelectedLecture(lecture);
              }}
              key={i}
              className="flex flex-col px-[6px] box-border justify-center items-center text-white"
              style={{
                backgroundColor: color[lecture.colorIndex - 1],
                gridColumnStart: time.day + 2,
                gridColumnEnd: time.day + 3,
                gridRowStart: (time.startMinute - 60 * 9) / 5 + 2,
                gridRowEnd: (time.endMinute - 60 * 9) / 5 + 2,
              }}
            >
              <p className="text-[10px] leading-3 line-clamp-2 text-center">
                {lecture.course_title}
              </p>
              <div className="h-1"></div>
              <p className="text-[11px] font-semibold leading-3">
                {time.place}
              </p>
            </button>
          )),
        )}
        {table !== undefined ? (
          <>
            <LectureListModal
              setLecture={setSelectedLecture}
              list={table.lecture_list}
              display={listModal}
              title={table.title}
              close={() => {
                setListModal(false);
              }}
            />
            <LectureModal
              tableId={table._id}
              lecture={selectedLecture}
              token={token}
              close={() => {
                setSelectedLecture(undefined);
              }}
              deleteLecture={deleteLecture}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default TimeTable;
