import type React from 'react';

const LectureInfo = ({
  title,
  info,
}: {
  title: string;
  info: string | number | React.JSX.Element;
}) => {
  return (
    <div className="flex items-center w-full h-fit px-4 py-2 text-neutral-500 text-sm">
      <div className="w-[100px] h-fit flex-shrink-0">{title}</div>
      <div className="text-sm">
        {info === '' ? <div className="text-gray">(없음)</div> : info}
      </div>
    </div>
  );
};

export const MenuGroup = ({
  menuArray,
}: {
  menuArray: { title: string; info: string | number | React.JSX.Element }[];
}) => {
  return (
    <div className="flex flex-col bg-white">
      {menuArray.map((menu, index) => {
        return (
          <LectureInfo
            title={menu.title}
            info={menu.info}
            key={menu.title + index.toString()}
          ></LectureInfo>
        );
      })}
    </div>
  );
};
