import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "./MovieCard";
import Loading from "./Loading";
import { fetchMovies, fetchMoviesList } from "./store/movieSlice";
import { nanoid } from "@reduxjs/toolkit";

const Movies = () => {
  const dispatch = useDispatch();

  const [query, setQuery] = React.useState("");
  const [headerText, setHeaderText] = React.useState(
    "Feel free to search for new Movies and TV series..."
  );

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(fetchMoviesList(query));
    setHeaderText("");
  };

  const { status } = useSelector((state) => state.movie);

  return (
    <div className="bg-gradient-to-r from-[#000428] to-[#004e92] w-full h-screen overflow-y-auto hover:overflow-y-scroll scroll-smooth">
      {/* Input form  */}
      <div className="flex flex-row justify-center py-10">
        <form className="w-3/4 sm:w-2/4" onSubmit={handleChange}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Movies here..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="text-white flex flex-row justify-center">
        <h1 className="text-center my-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {" "}
          {headerText}
        </h1>
      </div>

      {status === "ERROR" ? (
        <div className=" grid justify-items-center ">
          <div className="bg-slate-700 p-8 mt-8">
            <div className="text-lg sm:text-4xl flex flex-row justify-center mt-3">
              <p className="text-white font-bold">Server Down!!!</p>
            </div>
            <div className="text-lg sm:text-2xl flex flex-row justify-center mt-3">
              <p className=" text-white  mx-4">
                Try to understand, we are using the free version 😜
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {status === "LOADING" ? <Loading /> : <MovieCard />}
    </div>
  );
};

export default Movies;
