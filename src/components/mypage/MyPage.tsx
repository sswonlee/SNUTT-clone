import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
      <div className="flex justify-center items-center h-12 w-full border-b-[1px] border-zinc-200">
        <p className="font-bold text-center">더보기</p>
      </div>
      <div className="h-full flex flex-col p-5 bg-zinc-100 overflow-y-auto">
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button
            onClick={() => {
              nav('/mypage/account');
            }}
            className="flex items-center justify-between w-full h-fit"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: 'black' }}
                className="mx-2"
              />
              내 계정
            </div>

            <div className="text-sm font-semibold text-zinc-400">
              {nickname.nickname !== ''
                ? nickname.nickname + ' #' + nickname.tag
                : 'loading'}
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ color: '#a1a1aa' }}
                className="ml-2"
              />
            </div>
          </button>
        </div>

        <div className="text-xs text-zinc-500 m-1">디스플레이</div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="w-full flex items-center pb-2 border-b-[1px] border-zinc-200">
            <div>색상 모드</div>
            <div className="text-sm font-semibold text-zinc-400 ml-auto mr-3">
              라이트 모드
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <button className="w-full flex justify-between py-2 border-b-[1px] border-zinc-200">
            <div>시간표 설정</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <button className="w-full flex justify-between pt-2">
            <div>시간표 테마</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="text-xs text-zinc-500 m-1">서비스</div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="w-full flex justify-between">
            <div>빈자리 알림</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="text-xs text-zinc-500 m-1">정보 및 제안</div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <div className="flex justify-between pb-2 border-b-[1px] border-zinc-200">
            <div>버전 정보</div>
            <div className="text-sm font-semibold text-zinc-400 ml-auto">
              v3.8.0-release.7
            </div>
          </div>
          <button className="w-full flex pt-2 justify-between">
            <div>개발자 정보</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="w-full flex justify-between">
            <div>개발자 괴롭히기</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="w-full flex justify-between pb-2 border-b-[1px] border-zinc-200">
            <div>오픈소스 라이선스</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <button className="w-full flex justify-between py-2 border-b-[1px] border-zinc-200">
            <div>서비스 약관</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
          <button className="w-full flex justify-between pt-2">
            <div>개인정보처리방침</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button
            onClick={() => {
              resetToken();
              nav('/');
            }}
            className="w-full flex justify-between items-center"
          >
            <div className="text-red-500">로그아웃</div>
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
