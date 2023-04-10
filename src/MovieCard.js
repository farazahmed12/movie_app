import React from "react";
import { useSelector } from "react-redux";

import blank_img from "./assets/blank_movie2.jpg";

const MovieCard = () => {
  const movies = useSelector((state) => state.movie);
  const moviesList = movies?.data?.d;
  console.log("movies", moviesList);

  return (
    <div className="flex flex-row justify-center flex-wrap ">
      {moviesList?.map((movie, i) => (
        <div
          key={i}
          className="bg-sky-400 max-w-sm m-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a>
            <img
              className="h-auto max-w-sm"
              src={movie?.i?.imageUrl ? movie?.i?.imageUrl : blank_img}
              alt="movie "
            />
          </a>
          <div className="p-5">
            <a>
              <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-100 text-center">
                {movie.l}
              </h5>
            </a>

            <ul className="mb-8 space-y-4 text-left text-gray-600 dark:text-gray-400">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-900 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Genre:{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {movie.q}
                  </span>
                </span>
              </li>
              {movie.s && (
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-900 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Actors:{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {movie.s}
                    </span>
                  </span>
                </li>
              )}
              {movie.y && (
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-900 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Year:{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {movie.y}
                    </span>
                  </span>
                </li>
              )}
              {movie.yr && (
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-900 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {movie.yr}
                    </span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
