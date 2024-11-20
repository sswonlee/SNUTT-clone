import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import LectureModal from './components/LectureDetail/LectureModal';
import Login from './components/Login';
import Account from './components/mypage/Account';
import ChangeNickname from './components/mypage/ChangeNickname';
import MyPage from './components/mypage/MyPage';
import MyPageLayout from './components/MyPageLayout';
import NavBar from './components/NavBar';
import LectureList from './components/timeTable/LectureList';
import Timetable from './components/timeTable/Timetable';
import TimeTableLayout from './components/TimeTableLayout';

export const App = () => {
  const MyPageComponent = () => (
    <>
      <MyPageLayout></MyPageLayout>
      <NavBar></NavBar>
    </>
  );
  return (
    <div className="w-full h-full sm:w-[430px] sm:h-[932px] flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/mypage" element={<MyPageComponent></MyPageComponent>}>
            <Route index element={<MyPage />} />
            <Route path="account" element={<Account />}></Route>
            <Route
              path="account/change-nickname"
              element={<ChangeNickname />}
            />
          </Route>
          <Route
            path="/timetable"
            element={<TimeTableLayout></TimeTableLayout>}
          >
            <Route path=":tableID" element={<Timetable></Timetable>}></Route>
            <Route
              path=":tableID/lectures"
              element={<LectureList></LectureList>}
            ></Route>
            <Route
              path=":tableID/lectures/:lectureID"
              element={<LectureModal></LectureModal>}
            ></Route>
            <Route path="new"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
