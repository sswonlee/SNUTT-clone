import { useEffect, useState } from 'react';

import type { UserInfo } from '../types';

const Nickname = () => {
  const [nickname, setNickname] = useState<{ nickname: string; tag: string }>({
    nickname: '',
    tag: '',
  });
  useEffect(() => {
    if (nickname.nickname === '') {
      const value = document.cookie.match(
        '(^|;) ?' + 'x-access-token' + '=([^;]*)(;|$)',
      );
      let token = '';
      if (value !== null && value[2] !== undefined) {
        token = value[2];
      }
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
            ...nickname,
            nickname: json.nickname.nickname,
            tag: json.nickname.tag,
          });
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  }, [nickname]);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <p className="font-black text-xl">{nickname.nickname}🔥</p>
      <p className="font-semibold text-zinc-500">#{nickname.tag}</p>
    </div>
  );
};

export default Nickname;
