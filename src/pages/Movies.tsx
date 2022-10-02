import { FC, useState } from "react";
import Navbar from "../components/Navbar";
import loadable from "@loadable/component";
import TabButton from "../components/TabButton";

const NowPlayingList = loadable(() => import("../components/NowPlayingList"));
const TopRatedList = loadable(() => import("../components/TopRatedList"));

const MoviesPage: FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const _handleSetList = (isPlaying: boolean) => {
    setIsPlaying(isPlaying);
  };

  return (
    <>
      <Navbar>
        <div className="w-full py-4 grid grid-cols-2">
          <TabButton onClick={() => _handleSetList(true)} isActive={isPlaying}>
            Now playing
          </TabButton>
          <TabButton
            onClick={() => _handleSetList(false)}
            isActive={!isPlaying}
          >
            Top rated
          </TabButton>
        </div>
      </Navbar>
      <section className="container">
        {isPlaying ? <NowPlayingList /> : <TopRatedList />}
      </section>
    </>
  );
};

export default MoviesPage;
