import { MovieListItemComponentProps } from "../types";
import { FC, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import loadable from "@loadable/component";

const Image = loadable(() => import("./Image"), {
  fallback: (
    <div className="animate-pulse w-full aspect-[2/3] bg-gray-300"></div>
  ),
});

const MovieListItemComponent: FC<MovieListItemComponentProps> = ({
  item,
  listType,
}: MovieListItemComponentProps) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={`${pathname}/${item.id}`}
      className={`${
        listType ? "col-span-4" : "col-span-2 lg:col-span-1"
      } border p-4 shadow rounded-xl hover:bg-gray-300`}
    >
      <article className="w-full grid grid-cols-3 lg:grid-cols-5 gap-5">
        <figure
          className={`${listType ? "col-span-1" : "col-span-3 lg:col-span-5"}`}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={item.original_title}
          />
        </figure>
        <div
          className={`flex flex-col ${
            listType ? "col-span-2 lg:col-span-4" : "col-span-3 lg:col-span-5"
          }`}
        >
          <h1 className="font-bold text-lg lg:text-xl mb-4">{item.title}</h1>
          <p className="text-sm lg:text-base text-gray-700 truncate">
            {item.overview}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default memo(MovieListItemComponent);
