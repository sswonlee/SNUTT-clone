import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Account from './components/mypage/Account';
import ChangeNickname from './components/mypage/ChangeNickname';
import MyPage from './components/mypage/MyPage';
import MyPageLayout from './components/MyPageLayout';
import NavBar from './components/NavBar';

export const App = () => {
  return (
    <div className="w-screen h-screen sm:w-[430px] sm:h-[932px] flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/mypage"
            element={
              <>
                <MyPageLayout />
                <NavBar></NavBar>
              </>
            }
          >
            <Route path="" element={<MyPage />} />
            <Route path="account" element={<Account />}></Route>
            <Route
              path="account/change-nickname"
              element={<ChangeNickname />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
