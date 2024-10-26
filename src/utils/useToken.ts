import { useEffect, useState } from 'react';

const useToken = () => {
  const [token, setToken] = useState('');
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (token === '') {
      const value = document.cookie.match(
        '(^|;) ?' + 'x-access-token' + '=([^;]*)(;|$)',
      );
      if (value !== null && value[2] !== undefined) {
        setToken(value[2]);
        setLoaded(true);
      }
    }
  }, [token]);
  if (loaded) return token;
};

export default useToken;
