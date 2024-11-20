import { createContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { type Table } from '../types';
import useToken from '../utils/useToken';
import TimeTableError from './timeTable/timeTableError';

export const TableContext = createContext<{
  table: Table | null;
  cr: number;
}>({ table: null, cr: 0 });

function TimeTableLayout() {
  const [table, setTable] = useState<Table>();
  const [loading, setLoading] = useState<boolean>(true);
  const [cr, setCr] = useState<number>(0);
  const token = useToken();
  const location = useLocation();
  useEffect(() => {
    if (token !== undefined) {
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
          setLoading(false);
          data.lecture_list.map((item) => {
            setCr((prev) => prev + item.credit);
          });
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  }, [token]);
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center text-zinc-500 animate-pulse">
        <p>loading..</p>
      </div>
    );
  } else if (table === undefined) {
    return (
      <>
        <TimeTableError></TimeTableError>
      </>
    );
  } else {
    if (
      location.pathname === '/timetable/' ||
      location.pathname === '/timetable'
    ) {
      setTable(undefined);
    }
    return (
      <>
        <TableContext.Provider value={{ table, cr }}>
          <Outlet></Outlet>
        </TableContext.Provider>
      </>
    );
  }
}
export default TimeTableLayout;
