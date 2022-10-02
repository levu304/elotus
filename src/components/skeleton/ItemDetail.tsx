import { FC } from "react";

const ItemDetail: FC = () => {
  return (
    <article className="animate-pulse w-full py-4 grid grid-cols-3 gap-5">
      <figure className="col-span-3 lg:col-span-1">
        <div className="w-full aspect-[2/3] bg-gray-300"></div>
      </figure>

      <div className="col-span-3 lg:col-span-2">
        <div className="h-2 bg-gray-500 rounded mb-4"></div>
        <div className="h-2 bg-gray-500 rounded"></div>
      </div>
    </article>
  );
};

export default ItemDetail;
