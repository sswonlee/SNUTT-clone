import { useRef, useState } from 'react';

import left from '../assets/Left.png';
import type { Screen } from '../types';

type LoginProp = {
  setScreen: (arg: Screen) => void;
};

const Login = ({ setScreen }: LoginProp) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const logInLabel = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const check = () => {
    fetch(
      'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/auth/login_local',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          password: pwd,
        }),
      },
    )
      .then((response) => response.json())
      .then(
        (
          json:
            | {
                user_id: string;
                token: string;
                message: string;
              }
            | {
                errcode: number;
                message: string;
                displayMessage: string;
                ext: object;
              },
        ) => {
          if (json.message === 'ok' && 'token' in json) {
            const date = new Date();
            date.setTime(date.getTime() + 5 * 24 * 60 * 60 * 1000);
            document.cookie =
              'x-access-token=' +
              json.token +
              ';expires=' +
              date.toUTCString() +
              ';path=/';
            setScreen('nickname');
          } else if (
            'errcode' in json &&
            json.errcode === 8196 &&
            logInLabel.current !== null &&
            button.current !== null
          ) {
            logInLabel.current.textContent = '계정이 존재하지 않습니다.';
            logInLabel.current.classList.add('bg-red-500');
            button.current.textContent = '로그인';
          } else if (
            'errcode' in json &&
            json.errcode === 8197 &&
            logInLabel.current !== null &&
            button.current !== null
          ) {
            logInLabel.current.textContent = '비밀번호를 확인해보세요.';
            logInLabel.current.classList.add('bg-red-500');
            button.current.textContent = '로그인';
          }
        },
      )
      .catch(() => {
        window.alert('error. 😓🤬');
      });
  };
  // const checkIdentity = async () => {
  //   try {
  //     await axios
  //       .post<LogInType>(
  //         'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/auth/login_local',
  //         {
  //           id: id,
  //           password: pwd,
  //         },
  //       )
  //       .then((res) => {
  //         console.log(res);
  //       });

  //     if (response.data.message === 'ok') {
  //       const date = new Date();
  //       date.setTime(date.getTime() + 5 * 24 * 60 * 60 * 1000);
  //       document.cookie =
  //         'x-access-token=' +
  //         response.data.token +
  //         ';expires=' +
  //         date.toUTCString() +
  //         ';path=/';
  //       setScreen('nickname');
  //     }
  //   } catch (error: unknown) {
  //     if (isAxiosError(error)) {
  //       if (error?.response?.data?.errcode === 8196) {
  //         logInLabel.current.textContent = '계정이 존재하지 않습니다.';
  //         logInLabel.current.classList.add('bg-red-500');
  //       } else if (error.response.data.errcode === 8197) {
  //         logInLabel.current.textContent = '비밀번호를 확인해보세요.';
  //         logInLabel.current.classList.add('bg-red-500');
  //       }
  //       // Axios 오류일 경우에만 처리
  //       console.error('Axios error occurred:', error.response?.data);
  //     } else {
  //       // 그 외의 일반적인 오류 처리
  //       console.error('Unknown error occurred');
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col">
      <div className="h-2"></div>
      <div className="flex justify-center items-center relative text-[20px] font-bold border-b-[1.5px] border-zinc-300 pb-3">
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
      <div className="flex justify-center items-center">
        <div
          ref={logInLabel}
          className="my-3 px-3 py-1 text-sm font-semibold text-center text-white w-fit h-fit rounded-xl"
        ></div>
      </div>

      <div className="flex flex-col px-4 text-[14px] text-zinc-600 font-semibold  gap-3">
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
        <div className="flex text-[13px] gap-2 items-center  underline">
          <button>아이디 찾기</button>
          <div className="w-[1.25px] h-4 bg-gray"></div>
          <button>비밀번호 재설정</button>
        </div>
        <div className="h-6"></div>
        <button
          ref={button}
          onClick={() => {
            // setScreen('nickname');
            check();
            if (button.current !== null) {
              button.current.textContent = 'loading';
            }
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
