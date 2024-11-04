import { useEffect, useState } from 'react';

const useToken = () => {
  const [token, setToken] = useState<string | undefined>();
  useEffect(() => {
    if (token === undefined) {
      const value = document.cookie.match(
        '(^|;) ?' + 'x-access-token' + '=([^;]*)(;|$)',
      );
      if (value !== null && value[2] !== undefined) {
        setToken(value[2]);
      } else {
        setToken('');
      }
    }
  }, [token]);
  if (token !== undefined) return token;
};

export default useToken;
