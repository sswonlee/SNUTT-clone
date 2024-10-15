import './reset.css';
import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import AppBar from './components/AppBar';
import Home from './components/Home';
import { useState } from 'react';
import Nickname from './components/Nickname';
import Login from './components/Login';
import type { Screen } from './types';

export const App = () => {
  const [screen, setScreen] = useState<Screen>('home');

  return (
    <div className="w-[375px] h-[800px] flex flex-col rounded-md outline outline-1">
      <AppBar />
      {screen === 'home' ? (
        <Home setScreen={setScreen} />
      ) : screen === 'login' ? (
        <Login setScreen={setScreen} />
      ) : (
        <Nickname />
      )}
    </div>
  );
};
