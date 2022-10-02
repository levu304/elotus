import { useNowPlaying } from "../hooks/movies";
import MovieList from "./MovieList";
import { FC, useState } from "react";
import SegmentedControl from "./SegmentedControl";

const NowPlayingList: FC = () => {
  const { items, error, isLoading } = useNowPlaying();
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
      <MovieList items={items} listType={isList} />
    </>
  );
};

export default NowPlayingList;
