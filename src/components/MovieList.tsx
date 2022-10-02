import { FC, useState, useMemo, Suspense } from "react";
import { MovieListComponentProps, MovieListItem } from "../types";
import { lazy } from "@loadable/component";
import ListItem from "./skeleton/ListItem";

const MovieListItemComponent = lazy(() => import("./MovieListItemComponent"));

const MovieList: FC<MovieListComponentProps> = ({
  items = [],
  listType,
}: MovieListComponentProps) => {
  const [query, setQuery] = useState("");

  const filterItems: MovieListItem[] = useMemo(
    () =>
      items.filter((item: MovieListItem) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, items]
  );

  return (
    <div className="grid grid-cols-4 gap-5 py-4">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="col-span-4 border p-3"
        placeholder="Search"
      />
      {filterItems.map((item: MovieListItem, index: number) => (
        <Suspense fallback={<ListItem key={index} listType={listType} />}>
          <MovieListItemComponent item={item} key={index} listType={listType} />
        </Suspense>
      ))}
    </div>
  );
};

export default MovieList;
