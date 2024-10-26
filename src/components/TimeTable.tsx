import { useEffect, useState } from 'react';

import type { Lecture, Table } from '../types';
import NavBar from './NavBar';

const TimeTable = ({ token }: { token: string }) => {
  const [table, setTable] = useState<Array<Lecture>>();

  useEffect(() => {
    let ignore = false;
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
        if (!ignore) setTable(data.lecture_list);
      })
      .catch((err: unknown) => {
        if (!ignore) window.alert(err);
      });

    return () => {
      ignore = true;
    };
  }, [token]);

  return (
    <>
      <div>
        {table !== undefined
          ? table.map((res, i) => <div key={i}>{res.category}</div>)
          : null}
      </div>
      <NavBar />
    </>
  );
};

export default TimeTable;
