import type { Dispatch, SetStateAction } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useToken from '../../utils/useToken';

const DeleteModal = ({
  setDeleteLecture,
}: {
  setDeleteLecture: Dispatch<SetStateAction<boolean>>;
}) => {
  const { tableID, lectureID } = useParams();
  const token = useToken();
  const navigate = useNavigate();
  const goTable = () => {
    if (tableID !== undefined) navigate(`/timetable/${tableID}`);
  };
  const deleteLecture = () => {
    if (
      tableID !== undefined &&
      lectureID !== undefined &&
      token !== undefined
    ) {
      fetch(
        `https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/tables/${tableID}/lecture/${lectureID}`,
        { method: 'DELETE', headers: { 'x-access-token': token } },
      )
        .then((res) => {
          if (res.ok) {
            setDeleteLecture(false);
            goTable();
          } else {
            window.alert('강의 삭제에 실패했습니다.');
            setDeleteLecture(false);
            goTable();
          }
        })
        .catch((err: unknown) => {
          window.alert(err);
        });
    }
  };

  return (
    <div className="fixed top-0 w-full h-full flex justify-center items-center">
      <div
        className="w-full h-full bg-black opacity-50"
        onClick={() => {
          setDeleteLecture(false);
          goTable();
        }}
      ></div>
      <div className="absolute flex flex-col p-[20px] justify-between w-[330px] h-[150px] rounded-[20px] bg-white">
        <div className="text-[18px] font-semibold">강의 삭제</div>
        <div className="text-[14px]">강의를 삭제하시겠습니까?</div>
        <div className="flex text-[15px]">
          <div className="flex-grow"></div>
          <button
            onClick={() => {
              setDeleteLecture(false);
              goTable();
            }}
          >
            취소
          </button>
          <div className="w-8"></div>
          <button onClick={deleteLecture}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
