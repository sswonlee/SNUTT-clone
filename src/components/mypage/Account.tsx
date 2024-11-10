import { faCopy, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../MyPageLayout';

const Account = () => {
  const nickname = useContext(UserContext);
  const nav = useNavigate();

  return (
    <>
      <div className="h-12 my-auto w-full border-b-[1px] border-zinc-200">
        <p className="relative my-auto h-2 font-bold text-center">
          <button
            onClick={() => {
              nav('/mypage');
            }}
            className="h-full flex items-start"
          >
            <div className="absolute left-3 top-2">
              <FontAwesomeIcon icon={faChevronLeft} className="mr-1" />
              더보기
            </div>
          </button>
          내 계정
        </p>
      </div>

      <div className="h-full flex flex-col p-5 bg-zinc-100 overflow-y-auto">
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button
            onClick={() => {
              nav('/mypage/account/change-nickname');
            }}
            className="flex justify-between items-center pb-2 w-full h-fit border-b-[1px] border-zinc-200"
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: 'black' }}
                className="mx-2"
              />
              닉네임 변경
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
          <div className="flex justify-between items-center pt-2 w-full h-fit">
            <div>닉네임 복사하기</div>
            <FontAwesomeIcon icon={faCopy} style={{ color: '#64748b' }} />
          </div>
        </div>

        <div className="p-2 mb-8 bg-white rounded-lg">
          <div className="flex justify-between pb-2 w-full h-fit border-b-[1px] border-zinc-200">
            <div>아이디</div>
            {/* <div className="text-[15px] text-slate-500 ml-auto">{userid}</div> */}
          </div>
          <button className="flex justify-between items-center pt-2 w-full h-fit">
            <div>비밀번호 변경</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="flex justify-between items-center w-full h-fit">
            <div>SNS 계정 연동 및 해제</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: '#a1a1aa' }}
            />
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="flex justify-between w-full h-fit">
            <div>이메일</div>
            {/* <div className="text-[15px] text-slate-500 ml-auto">{email}</div> */}
          </button>
        </div>
        <div className="p-2 mb-8 bg-white rounded-lg">
          <button className="flex justify-between w-full h-fit">
            <div className="text-red-500">회원 탈퇴</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
