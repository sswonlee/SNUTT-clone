import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import NavBar from './NavBar';

function ChangeNickname() {
  const nav = useNavigate();
  const [nickname, setNickname] = useState<{ nickname: string; tag: string }>({
    nickname: 'asdf',
    tag: '',
  });
  return (
    <>
      <div className="h-[30px] w-full flex flex-row px-2 justify-center place-items-center bg-white">
        <button
          onClick={() => {
            nav('/mypage');
          }}
          className="h-full flex flex-row mr-[88px] items-start"
        >
          <div className="text-[19px] font-bold mr-2">{'<'}</div>
          <div className="text-[17px] font-bold py-0.5">더보기</div>
        </button>
        <div className="text-[17px] font-bold pb-1 mr-auto">닉네임 변경</div>
        <button>저장</button>
      </div>
      {nickname.nickname !== '' ? (
        <div className="h-full w-full flex flex-col px-5 bg-slate-100 overscroll-contain overflow-y-auto [&::-webkit-scrollbar]:w-[1px]">
          <p className="p-3 text-xs text-zinc-400">
            닉네임 (공백 포함 한/영/숫자 10자 이내)
          </p>
          <div className="w-full flex rounded-lg justify-between items-center bg-white overflow-hidden">
            <input
              type="text"
              className="w-full focus:outline-none p-3 placeholder-zinc-300"
              placeholder={nickname.nickname}
            ></input>
            <div className="flex">
              <p className="w-6 h-6 text-center text-lg bg-zinc-300 rounded-full text-white">
                x
              </p>
              <p className="px-3 text-zinc-300">#NNNN</p>
            </div>
          </div>
          <div className="p-3 text-xs text-zinc-400">
            <p>최초 닉네임은 가입 시 임의 부여된 닉네임으로,</p>
            <p>앞의 이름을 변경할 시 4자리 숫자 태그는 자동 변경됩니다.</p>
          </div>
          <div className="p-3 text-xs text-zinc-400">
            <p>변경된 닉네임은 나의 모든 친구에게 반영됩니다.</p>
          </div>
          <div className="p-3 text-xs text-zinc-400">
            <p className="font-bold">닉네임 조건</p>
            <p>* 불완전한 한글(예: ㄱ, ㅏ)은 포함될 수 없습니다.</p>
            <p>* 영문 대/소문자는 구분됩니다.</p>
            <p>
              * 상대에게 불쾌감을 주는 등 부적절한 닉네임은 관리자에 의해 안내
              없이 수정될 수 있습니다.
            </p>
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
}

export default ChangeNickname;
