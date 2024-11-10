import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import type { UserInfo } from '../types';
import useToken from '../utils/useToken';

export const UserContext = createContext({ nickname: '', tag: '' });
const MyPageLayout = () => {
  const [nickname, setNickname] = useState<{ nickname: string; tag: string }>({
    nickname: '',
    tag: '',
  });
  const token = useToken();

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
      {nickname.nickname !== '' ? (
        <UserContext.Provider value={nickname}>
          <Outlet></Outlet>
        </UserContext.Provider>
      ) : (
        <div className="h-full w-full flex flex-col justify-center items-center flex-grow">
          <p className="font-black text-xl">loading...</p>
          <p className="font-semibold text-zinc-500">
            {nickname.tag !== '' ? '#' + nickname.tag : ''}
          </p>
        </div>
      )}
    </>
  );
};

export default MyPageLayout;
