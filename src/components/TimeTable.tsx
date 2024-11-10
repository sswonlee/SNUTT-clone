import { useEffect, useState } from 'react';

import List from '../assets/List.svg';
import type { Lecture, Table } from '../types';

const TimeTable = ({ token }: { token: string }) => {
  const [table, setTable] = useState<Array<Lecture>>();
  const [credit, setCredit] = useState(0);
  const [title, setTitle] = useState('');
  const HOUR_NUMBER = 12;

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
        setTable(data.lecture_list);
        let tmp = 0;
        data.lecture_list.map((item) => {
          tmp += item.credit;
        });
        setCredit(tmp);
        setTitle(data.title);
      })
      .catch((err: unknown) => {
        window.alert(err);
      });
  }, [token]);

  return (
    <>
      <div className="flex h-10 w-full items-center pl-4">
        <button className="w-[26px] h-[26px]">
          <img src={List} />
        </button>
        <div className="w-3"></div>
        <div className="text-[17px] font-bold">{title}</div>
        <div className="w-2"></div>
        <div className="text-xs font-normal text-gray">({`${credit}학점`})</div>
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
        {table?.map((lecture) =>
          lecture.class_time_json.map((time, i) => (
            <div
              key={i}
              className="flex flex-col px-[6px] box-border justify-center items-center bg-black text-white"
              style={{
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
            </div>
          )),
        )}
      </div>
    </>
  );
};

export default TimeTable;
