import { useEffect, useState } from 'react';

import battery from '../assets/Battery.svg';
import cellular from '../assets/Celluar.svg';
import wifi from '../assets/Wi-Fi.svg';

const AppBar = () => {
  const [time, setTime] = useState('');

  const getCurTime = () => {
    const curTime = new Date();
    const hours = curTime.getHours();
    setTime(
      `${String(hours > 12 ? hours - 12 : hours === 0 ? 12 : hours).padStart(
        2,
        ' ',
      )}:${String(curTime.getMinutes()).padStart(2, '0')}`,
    );
  };

  useEffect(() => {
    const interval = setInterval(getCurTime, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[44px] flex justify-between">
      <div className="h-full w-[93px] flex items-center justify-center text-[15px] font-semibold">
        {time}
      </div>
      <div className="h-full w-[95px] flex items-center justify-center gap-1">
        <img src={cellular} />
        <img src={wifi} />
        <img src={battery} />
      </div>
    </div>
  );
};

export default AppBar;
