import './reset.css';
import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Account from './components/Account';
import ChangeNickname from './components/ChangeNickname';
import Home from './components/Home';
import Login from './components/Login';
import MyPage from './components/MyPage';

export const App = () => {
  return (
    <div className="w-[375px] h-[800px] flex flex-col pt-11 pb-[34px] relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/mypage/account" element={<Account />}></Route>
          <Route
            path="/mypage/account/change-nickname"
            element={<ChangeNickname />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
