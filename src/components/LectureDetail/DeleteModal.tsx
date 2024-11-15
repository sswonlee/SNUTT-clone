const DeleteModal = ({
  tableId,
  lectureId,
  close,
  del,
  token,
}: {
  tableId: string;
  lectureId: string;
  close: () => void;
  del: () => void;
  token: string;
}) => {
  const deleteLecture = () => {
    fetch(
      `https://wafflestudio-seminar-2024-snutt-redirect.vercel.app/v1/tables/${tableId}/lecture/${lectureId}`,
      { method: 'DELETE', headers: { 'x-access-token': token } },
    )
      .then(() => {
        close();
        del();
      })
      .catch((err: unknown) => {
        window.alert(err);
      });
  };

  return (
    <div className="fixed top-0 w-full h-full flex justify-center items-center">
      <div className="w-full h-full bg-black opacity-50" onClick={close}></div>
      <div className="absolute flex flex-col p-[20px] justify-between w-[330px] h-[150px] rounded-[20px] bg-white">
        <div className="text-[18px] font-semibold">강의 삭제</div>
        <div className="text-[14px]">강의를 삭제하시겠습니까?</div>
        <div className="flex text-[15px]">
          <div className="flex-grow"></div>
          <button onClick={close}>취소</button>
          <div className="w-8"></div>
          <button onClick={deleteLecture}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
