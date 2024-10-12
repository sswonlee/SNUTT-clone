import './reset.css';
import './App.css';
import 'pretendard/dist/web/static/pretendard.css';

import AppBar from './components/AppBar';
import Home from './components/Home';

export const App = () => {
  return (
    <div className="w-[375px] h-[800px] flex flex-col pb-[90px] rounded-md outline outline-1">
      <AppBar />
      <Home />
    </div>
  );
};
