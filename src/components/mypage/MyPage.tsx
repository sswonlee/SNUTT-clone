import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../MyPageLayout';

const MyPage = () => {
  const nickname = useContext(UserContext);
  const nav = useNavigate();

  const resetToken = () => {
    document.cookie.split(';').forEach((cookie) => {
      document.cookie =
        cookie + '=;expires=' + new Date(0).toUTCString() + ';path=/';
    });
  };

  return (
    <>
      <div className="h-8 w-full border-b-[1px] border-zinc-200">
        <p className="font-bold text-center">더보기</p>
      </div>
      <div className="flex flex-col p-5 bg-zinc-100 overflow-y-auto">
        <button
          onClick={() => {
            nav('/mypage/account');
          }}
          className="w-full flex flex-row px-2 mb-8 py-2 rounded-md border-0 items-center bg-white"
        >
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: 'black' }}
            className="mx-2"
          />
          <div className="text-[15px] font-medium">내 계정</div>
          <div className="text-[15px] text-slate-500 ml-auto mr-3">
            {nickname.nickname !== ''
              ? nickname.nickname + '#' + nickname.tag
              : 'loading'}
          </div>
          <FontAwesomeIcon icon={faChevronRight} style={{ color: '#a1a1aa' }} />
        </button>

        <div className="text-[13px] text-slate-500 ml-2 mb-1">디스플레이</div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center">
            <div className="text-[15px] font-medium">색상 모드</div>
            <div className="text-[15px] text-slate-500 ml-auto mr-3">
              라이트 모드
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">시간표 설정</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">시간표 테마</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="text-[13px] text-slate-500 ml-2 mb-1">서비스</div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">빈자리 알림</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="text-[13px] text-slate-500 ml-2 mb-1">정보 및 제안</div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <div className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
            <div className="text-[15px] font-medium">버전 정보</div>
            <div className="text-[15px] text-slate-500 ml-auto">
              v3.8.0-release.7
            </div>
          </div>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">개발자 정보</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">개발자 괴롭히기</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">오픈소스 라이선스</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">서비스 약관</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center justify-between">
            <div className="text-[15px] font-medium">개인정보처리방침</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="w-full flex flex-col mb-4 rounded-md border-0 items-center bg-white">
          <button
            onClick={() => {
              resetToken();
              nav('/');
            }}
            className="w-full flex flex-row mx-2 px-2 py-2 rounded-md  items-center justify-between"
          >
            <div className="text-[15px] text-red-500 font-medium">로그아웃</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default MyPage;
