import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
  },
  reducers: {
    setMovies(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;

// Thunk
export function fetchMovies() {
  return async function fetchMoviesThunk(dispatch, state) {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: "game of thr" },
      headers: {
        "X-RapidAPI-Key": "7a95f3c898msh678bdae56a62a03p1ad6a6jsnf4abaee5a717",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    try {
      const res = await axios.request(options);
      const data = res.data;
      dispatch(setMovies(data));
      console.log(data);
    } catch (error) {
      console.log(Error, error.message);
    }
  };
}
