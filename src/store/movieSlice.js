import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Thunk
export const fetchMoviesList = createAsyncThunk(
  "movies/fetchmovies",
  async (que) => {
    const options = {
      method: "GET",
      url: "https://imdb8.p.rapidapi.com/auto-complete",
      params: { q: que },
      headers: {
        "X-RapidAPI-Key": "7a95f3c898msh678bdae56a62a03p1ad6a6jsnf4abaee5a717",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };
    try {
      const res = await axios.request(options);
      const data = res?.data;
      return data;
    } catch (error) {
      console.log(Error, error.message);
      throw Error("Sorry, Our server is down");
    }
  }
);

// Slice
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    status: "IDLE",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMoviesList.pending, (state, action) => {
        state.status = "LOADING";
      })
      .addCase(fetchMoviesList.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "IDLE";
      })
      .addCase(fetchMoviesList.rejected, (state, action) => {
        state.status = "ERROR";
      });
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
