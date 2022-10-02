import { FC, memo } from "react";

type Props = {
  listType: boolean;
};

const ListItem: FC<Props> = ({ listType }: Props) => {
  return (
    <div
      className={`${
        listType ? "col-span-4" : "col-span-2 lg:col-span-1"
      } border p-4 shadow rounded-xl hover:bg-gray-100`}
    >
      <article className="animate-pulse w-full grid grid-cols-3 lg:grid-cols-5 gap-5">
        <figure
          className={`${listType ? "col-span-1" : "col-span-3 lg:col-span-5"}`}
        >
          <div className="w-full aspect-[2/3] bg-gray-500" />
        </figure>
        <div
          className={`flex flex-col ${
            listType ? "col-span-2 lg:col-span-4" : "col-span-3 lg:col-span-5"
          }`}
        >
          <div className="h-2 bg-gray-500 rounded mb-4"></div>
          <div className="h-2 bg-gray-500 rounded"></div>
        </div>
      </article>
    </div>
  );
};

export default memo(ListItem);
