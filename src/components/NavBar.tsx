import { useLocation, useNavigate } from 'react-router-dom';

import Friend from '../assets/NavBar/Friend.svg';
//import FriendSel from '../assets/Friend-sel.svg';
import Like from '../assets/NavBar/Like.svg';
//import LikeSel from '../assets/Like-sel.svg';
import Search from '../assets/NavBar/Search.svg';
//import SearchSel from '../assets/Search-sel.svg';
import Setting from '../assets/NavBar/Setting.svg';
import SettingSel from '../assets/NavBar/Setting-sel.svg';
import TimeTable from '../assets/NavBar/TimeTable.svg';
import TimeTableSel from '../assets/NavBar/TimeTable-sel.svg';

const NavBar = () => {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <div className="flex w-full justify-between items-center px-[30px] py-2.5">
      <button
        onClick={() => {
          nav('/');
        }}
        className="w-[30px] h-[30px]"
      >
        <img
          src={loc.pathname.includes('/timetable') ? TimeTableSel : TimeTable}
        />
      </button>
      <button className="w-[30px] h-[30px]">
        <img src={Search} />
      </button>
      <button className="w-[30px] h-[30px]">
        <img src={Like} />
      </button>
      <button className="w-[30px] h-[30px]">
        <img src={Friend} />
      </button>
      <button
        onClick={() => {
          nav('/mypage');
        }}
        className="w-[30px] h-[30px]"
      >
        <img src={loc.pathname.includes('/mypage') ? SettingSel : Setting} />
      </button>
    </div>
  );
};

export default NavBar;
