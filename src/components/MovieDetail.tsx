import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/movies";
import { FC } from "react";

const MovieDetail: FC = () => {
  const { movieId } = useParams();
  const { item, isLoading, error } = useMovieDetail(movieId);

  if (isLoading) {
    return <div className="w-full flex justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="w-full flex justify-center">{error.message}</div>;
  }

  return (
    <article className="w-full py-4 grid grid-cols-3 gap-5">
      <figure className="col-span-3 lg:col-span-1">
        <img
          className="w-full aspect-[2/3] object-cover bg-gray-300"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}
      `}
          alt={item.title}
          loading="lazy"
        />
      </figure>

      <div className="col-span-3 lg:col-span-2">
        <h1 className="text-lg lg:text-2xl font-bold mb-4">{item.title}</h1>
        <p className="text-sm lg:text-base text-gray-700">{item.overview}</p>
      </div>
    </article>
  );
};

export default MovieDetail;
