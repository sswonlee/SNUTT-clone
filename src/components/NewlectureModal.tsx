import type { Dispatch, SetStateAction } from 'react';

const NewLectureModal = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<true | false>>;
}) => {
  return (
    <>
      <div className="absolute w-full h-full bg-white top-0 flex flex-col pt-10">
        <div className="fixed top-0 flex h-10 w-full bg-white items-center px-4 border-b border-solid border-neutral-200 box-border">
          <div className="flex w-full items-center">
            <button
              onClick={() => {
                setModal(false);
              }}
              className="w-10 h-6"
            >
              <p className="text-[17px] font-bold">취소</p>
            </button>
            <p className="mx-auto text-[17px] font-bold">강의 생성</p>
            <button
              onClick={() => {
                {
                  /*api 보내기*/
                }
                setModal(false);
              }}
              className="w-10 h-6"
            >
              <p className="text-[17px] font-bold">저장</p>
            </button>
          </div>
        </div>
        {/*여기부터 추가하면 될듯*/}
      </div>
    </>
  );
};

export default NewLectureModal;
