import { FC, useState, useMemo, Suspense } from "react";
import { MovieListComponentProps, MovieListItem } from "../types";
import { lazy } from "@loadable/component";
import ListItem from "./skeleton/ListItem";
import PullToRefresh from "react-simple-pull-to-refresh";

const MovieListItemComponent = lazy(() => import("./MovieListItemComponent"));

const MovieList: FC<MovieListComponentProps> = ({
  items = [],
  listType,
  handleRefresh,
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
    <div className="w-full">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        className="w-full border p-3"
        placeholder="Search"
      />
      <PullToRefresh onRefresh={handleRefresh}>
        <div className="grid grid-cols-4 gap-5 py-4">
          {filterItems.map((item: MovieListItem, index: number) => (
            <Suspense key={index} fallback={<ListItem listType={listType} />}>
              <MovieListItemComponent item={item} listType={listType} />
            </Suspense>
          ))}
        </div>
      </PullToRefresh>
    </div>
  );
};

export default MovieList;
