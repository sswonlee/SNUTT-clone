import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import manicon from '../assets/manicon.png';
import type { UserInfo } from '../types';
import useToken from '../utils/useToken';
import NavBar from './NavBar';

const MyPage = () => {
  const [nickname, setNickname] = useState<{ nickname: string; tag: string }>({
    nickname: '',
    tag: '',
  });
  const token = useToken();
  const nav = useNavigate();

  const resetToken = () => {
    document.cookie.split(';').forEach((cookie) => {
      document.cookie =
        cookie + '=;expires=' + new Date(0).toUTCString() + ';path=/';
    });
  };

  useEffect(() => {
    if (token !== undefined) {
      fetch(
        'https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/users/me',
        {
          method: 'GET',
          headers: {
            'x-access-token': token,
          },
        },
      )
        .then((response) => response.json())
        .then((json: UserInfo) => {
          setNickname({
            nickname: json.nickname.nickname,
            tag: json.nickname.tag,
          });
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  }, [token]);

  return (
    <>
      <div className="h-100 w-full justify-center place-items-center bg-white">
        <p className="text-[17px] font-bold pb-1">더보기</p>
      </div>
      {nickname.nickname !== '' ? (
        <div className="h-full w-full flex flex-col px-5 pt-8 bg-slate-100 overscroll-contain overflow-y-auto [&::-webkit-scrollbar]:w-[1px]">
          <button
            onClick={() => {
              nav('/mypage/account');
            }}
            className="w-full flex flex-row px-2 mb-8 py-5 rounded-md border-0 items-center bg-white"
          >
            <img className="w-[20px] h-[20px] mr-1" src={manicon} />
            <div className="text-[15px] font-medium">내 계정</div>
            <div className="text-[15px] text-slate-500 ml-auto mr-3">
              {nickname.nickname + '#' + nickname.tag}
            </div>
            <div className="text-[15px] text-slate-500">{'>'}</div>
          </button>

          <div className="text-[13px] text-slate-500 ml-2 mb-1">디스플레이</div>
          <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
            <button className="w-full flex flex-row mx-2 px-2 py-2 items-center">
              <div className="text-[15px] font-medium">색상 모드</div>
              <div className="text-[15px] text-slate-500 ml-auto mr-3">
                라이트 모드
              </div>
              <div className="text-[15px] text-slate-500">{'>'}</div>
            </button>
            <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
            <button className="w-full flex flex-row mx-2 px-2 py-2 items-center bg-white">
              <div className="text-[15px] font-medium">시간표 설정</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
            <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
              <div className="text-[15px] font-medium">시간표 테마</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
          <div className="text-[13px] text-slate-500 ml-2 mb-1">서비스</div>
          <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
              <div className="text-[15px] font-medium">빈자리 알림</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
          <div className="text-[13px] text-slate-500 ml-2 mb-1">
            정보 및 제안
          </div>
          <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
            <div className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
              <div className="text-[15px] font-medium">버전 정보</div>
              <div className="text-[15px] text-slate-500 ml-auto">
                v3.8.0-release.7
              </div>
            </div>
            <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
              <div className="text-[15px] font-medium">개발자 정보</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
          <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center bg-white">
              <div className="text-[15px] font-medium">개발자 괴롭히기</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
          <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center bg-white">
              <div className="text-[15px] font-medium">오픈소스 라이선스</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
            <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center bg-white">
              <div className="text-[15px] font-medium">서비스 약관</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
            <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
            <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center bg-white">
              <div className="text-[15px] font-medium">개인정보처리방침</div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
          <div className="w-full flex flex-col mb-4 rounded-md border-0 items-center bg-white">
            <button
              onClick={() => {
                resetToken();
                nav('/');
              }}
              className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center bg-white"
            >
              <div className="text-[15px] text-red-500 font-medium">
                로그아웃
              </div>
              <div className="text-[15px] text-slate-500 ml-auto">{'>'}</div>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center flex-grow">
          <p className="font-black text-xl">loading...</p>
          <p className="font-semibold text-zinc-500">
            {nickname.tag !== '' ? '#' + nickname.tag : ''}
          </p>
        </div>
      )}
      <NavBar />
    </>
  );
};

export default MyPage;
