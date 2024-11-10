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
      <UserContext.Provider value={nickname}>
        <Outlet></Outlet>
      </UserContext.Provider>
    </>
  );
};

export default MyPageLayout;
