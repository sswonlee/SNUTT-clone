import { useState } from 'react';

import left from '../assets/Left.png';
import type { Screen } from '../types';

type LoginProp = {
  setScreen: (arg: Screen) => void;
};

const Login = ({ setScreen }: LoginProp) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <div className="flex flex-col">
      <div className="h-2"></div>
      <div className="flex justify-center items-center relative text-[20px] font-bold font-pret">
        <button
          onClick={() => {
            setScreen('home');
          }}
          className="flex gap-1 items-center justify-center absolute left-1 font-medium"
        >
          <img src={left} className="h-5 w-5" />
          뒤로
        </button>
        로그인
      </div>
      <div className="h-3"></div>
      <div className="h-[0.75px] bg-gray"></div>
      <div className="h-3"></div>
      <div className="flex flex-col px-4 text-[14px] text-zinc-600 font-semibold font-pret gap-3">
        아이디
        <input
          className="text-black border-b-[1px] py-2 focus:outline-none"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        비밀번호
        <input
          className="text-black border-b-[1px] py-2 focus:outline-none"
          placeholder="비밀번호를 입력하세요"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <div className="flex text-[13px] gap-2 items-center font-pret underline">
          <button>아이디 찾기</button>
          <div className="w-[1.25px] h-4 bg-gray"></div>
          <button>비밀번호 재설정</button>
        </div>
        <div className="h-6"></div>
        <button
          onClick={() => {
            setScreen('nickname');
          }}
          disabled={id === '' || pwd === '' ? true : false}
          className="flex items-center justify-center text-[16px] bg-orange hover:bg-orangeHover disabled:bg-gray p-3 text-white bottom-0 rounded-md "
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default Login;
