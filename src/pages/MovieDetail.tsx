import { FC, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import loadable from "@loadable/component";
import ItemDetail from "../components/skeleton/ItemDetail";

const MovieDetail = loadable(() => import("../components/MovieDetail"))

const MovieDetailPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar>
        <div className="w-full py-4 flex flex-row items-center">
          <button onClick={(e) => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </Navbar>
      <section className="container">
        <Suspense fallback={<ItemDetail />}>
          <MovieDetail />
        </Suspense>
      </section>
    </>
  );
};

export default MovieDetailPage;
