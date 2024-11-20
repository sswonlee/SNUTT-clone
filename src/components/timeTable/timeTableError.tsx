import { useNavigate } from 'react-router-dom';

function TimeTableError() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen font-black text-red-500">
      <div className="w-fit space-y-3">
        <p>시간표 정보를 불러오지 못했습니다.</p>
        <button
          className="w-full h-fit py-2 bg-red-200 hover:bg-red-300 text-red-500 hover:scale-105 shadow-xl shadow-red-500/20 rounded-xl text-sm focus:ring-red-200 duration-300"
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
export default TimeTableError;
