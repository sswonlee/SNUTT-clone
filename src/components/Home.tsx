import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import google from '../assets/Login/Google.png';
import waffle from '../assets/Waffle.svg';
import type { Table } from '../types';
import useToken from '../utils/useToken';

const Home = () => {
  const token = useToken();
  const nav = useNavigate();
  const [id, setId] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

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
          setId(data._id);
          setLoading(false);
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  }, [id, token]);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center text-zinc-500 animate-pulse">
        <p>loading..</p>
      </div>
    );
  }
  if (token !== undefined && token !== '') {
    nav(`/timetable/${id}`);
  } else {
    return (
      <>
        <>
          <div className="h-[232px]"></div>
          <div className="flex-grow flex flex-col items-center">
            <div className="flex flex-col gap-4 items-center text-[21.353px] font-black">
              <img src={waffle} />
              TimeTable
            </div>
            <div className="h-[136px]"></div>
            <div className="px-8 w-full flex flex-col items-center">
              <button
                onClick={() => {
                  nav('/login');
                }}
                className="w-full p-3 text-[14px] rounded-md bg-orange text-white text-center font-semibold hover:bg-orangeHover"
              >
                로그인
              </button>
              <div className="h-3.5"></div>
              <button className="text-[14px] font-semibold hover:opacity-60">
                회원가입
              </button>
            </div>
            <div className="h-10"></div>
            <div className="w-full px-3 flex flex-col items-center">
              <div className="w-full self-stretch gap-2.5 flex justify-center items-center">
                <div className="w-[100px] h-[0.75px] bg-gray"></div>
                <div className="text-[14px] font-medium text-gray">
                  SNS 계정으로 계속하기
                </div>
                <div className="w-[100px] h-[0.75px] bg-gray"></div>
              </div>
              <div className="h-6"></div>
              <div className="flex items-center gap-3">
                <button className="bg-[url('/src/assets/Login/Kakao.png')] bg-[position:-2.973px_-1.784px] bg-[length:106.757%_104.054%] w-11 h-11 rounded-full" />
                <button className="w-11 h-11 p-[9.6px] flex justify-center items-center border-[0.4px] border-gray rounded-full">
                  <img src={google} className="w-[24.8px] h-[24.8px]" />
                </button>
                <button className="bg-[url('/src/assets/Login/Facebook.png')] bg-[position:50%] bg-cover w-11 h-11 rounded-full" />
                <button className="bg-[url('/src/assets/Login/Apple.png')] bg-[position:-4.046px_-4.702px] bg-[length:119.923%_120.611%] w-11 h-11 rounded-full" />
              </div>
            </div>
          </div>
        </>
      </>
    );
  }
};

export default Home;
