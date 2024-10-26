import { useEffect, useState } from 'react';

import type { UserInfo } from '../types';
import useToken from '../utils/useToken';
import NavBar from './NavBar';

const Nickname = () => {
  const [nickname, setNickname] = useState<{ nickname: string; tag: string }>({
    nickname: '',
    tag: '',
  });
  const token = useToken();

  useEffect(() => {
    let ignore = false;
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
          if (!ignore)
            setNickname({
              nickname: json.nickname.nickname,
              tag: json.nickname.tag,
            });
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
    return () => {
      ignore = true;
    };
  }, [token]);

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <p className="font-black text-xl">
          {nickname.nickname !== '' ? nickname.nickname + '🔥' : 'loading..'}
        </p>
        <p className="font-semibold text-zinc-500">
          {nickname.tag !== '' ? '#' + nickname.tag : ''}
        </p>
      </div>
      <NavBar />
    </>
  );
};

export default Nickname;
