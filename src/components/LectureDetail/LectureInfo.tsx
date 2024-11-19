const LectureInfo = ({
  title,
  info,
}: {
  title: string;
  info: string | number;
}) => {
  return (
    <div className="flex bg-white w-full h-fit justify-center px-4">
      <div className="flex w-[100px] py-[10px] h-fit items-center text-neutral-500 text-[14px] flex-shrink-0">
        {title}
      </div>
      <div className="flex py-[10px] items-center w-full text-[14px]">
        {info !== '' ? info : <div className="text-gray">(없음)</div>}
      </div>
    </div>
  );
};

export default LectureInfo;
