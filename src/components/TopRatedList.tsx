import { useTopRated } from "../hooks/movies";
import MovieList from "./MovieList";
import { FC, useState } from "react";
import SegmentedControl from "./SegmentedControl";

const TopRatedList: FC = () => {
  const { items, error, isLoading, handleRefresh } = useTopRated();
  const [isList, setIsList] = useState(false);

  if (isLoading) {
    return <div className="w-full flex justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="w-full flex justify-center">{error.message}</div>;
  }

  return (
    <>
      <SegmentedControl listType={isList} setControl={setIsList} />
      <MovieList items={items} listType={isList} handleRefresh={handleRefresh} />
    </>
  );
};

export default TopRatedList;
