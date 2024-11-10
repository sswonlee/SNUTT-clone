import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import copy from '../../assets/copy.svg';
import { UserContext } from '../MyPageLayout';

const Account = () => {
  const nickname = useContext(UserContext);
  const nav = useNavigate();

  return (
    <>
      <div className="h-[30px] w-full flex flex-row pl-2 justify-center place-items-center bg-white">
        <button
          onClick={() => {
            nav('/mypage');
          }}
          className="h-full flex flex-row mr-[88px] items-start"
        >
          <div className="text-[19px] font-bold mr-2">{'<'}</div>
          <div className="text-[17px] font-bold py-0.5">더보기</div>
        </button>
        <div className="text-[17px] font-bold pb-1 mr-auto">내 계정</div>
      </div>

      <div className="h-full w-full flex flex-col px-5 pt-8 bg-slate-100 overscroll-contain overflow-y-auto [&::-webkit-scrollbar]:w-[1px]">
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button
            onClick={() => {
              nav('/mypage/account/change-nickname');
            }}
            className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white"
          >
            <div className="text-[15px] font-medium">닉네임 변경</div>
            <div className="text-[15px] text-slate-500 ml-auto mr-3">
              {nickname.nickname + '#' + nickname.tag}
            </div>
            <div className="text-[17px] text-slate-500 pb-1">{'>'}</div>
          </button>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
            <div className="text-[15px] font-medium">닉네임 복사하기</div>
            <img src={copy} className="w-[18px] h-[18px] ml-auto " />
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <div className="w-full flex flex-row mx-2 px-2 py-2 items-center">
            <div className="text-[15px] font-medium">아이디</div>
            {/* <div className="text-[15px] text-slate-500 ml-auto">{userid}</div> */}
          </div>
          <div className="ml-3 mr-0 w-full border-[0.8px] rounded-l-lg border-slate-100" />
          <button className="w-full flex flex-row mx-2 px-2 py-2 items-center bg-white">
            <div className="text-[15px] font-medium">비밀번호 변경</div>
            <div className="text-[17px] text-slate-500 pb-1 ml-auto">{'>'}</div>
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
            <div className="text-[15px] font-medium">SNS 계정 연동 및 해제</div>
            <div className="text-[17px] text-slate-500 pb-1 ml-auto">{'>'}</div>
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
            <div className="text-[15px] font-medium">이메일</div>
            {/* <div className="text-[15px] text-slate-500 ml-auto">{email}</div> */}
          </button>
        </div>
        <div className="w-full flex flex-col mb-8 rounded-md border-0 items-center bg-white">
          <button className="w-full flex flex-row mx-2 px-2 py-2 rounded-md items-center bg-white">
            <div className="text-red-500 text-[15px] font-medium">
              회원 탈퇴
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Account;
