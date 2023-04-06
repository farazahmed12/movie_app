import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./store/movieSlice";

const Movies = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <div className="bg-slate-900 w-full h-screen">
      <h1 className="text-white">heading</h1>

      <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </div>
  );
};

export default Movies;
