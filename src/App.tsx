import './reset.css';
import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import { useState } from 'react';

import AppBar from './components/AppBar';
import Home from './components/Home';
import Login from './components/Login';
import Nickname from './components/Nickname';
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
