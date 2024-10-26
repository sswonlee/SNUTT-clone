import { useLocation, useNavigate } from 'react-router-dom';

import Friend from '../assets/Friend.svg';
//import FriendSel from '../assets/Friend-sel.svg';
import Like from '../assets/Like.svg';
//import LikeSel from '../assets/Like-sel.svg';
import Search from '../assets/Search.svg';
//import SearchSel from '../assets/Search-sel.svg';
import Setting from '../assets/Setting.svg';
import SettingSel from '../assets/Setting-sel.svg';
import TimeTable from '../assets/TimeTable.svg';
import TimeTableSel from '../assets/TimeTable-sel.svg';

const NavBar = () => {
  const nav = useNavigate();
  const loc = useLocation();

  return (
    <div className="flex w-full justify-between items-center px-[30px] py-2.5 absolute bottom-[34px]">
      <button
        onClick={() => {
          nav('/');
        }}
        className="w-[30px] h-[30px]"
      >
        <img src={loc.pathname === '/' ? TimeTableSel : TimeTable} />
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
        <img src={loc.pathname === '/mypage' ? SettingSel : Setting} />
      </button>
    </div>
  );
};

export default NavBar;
