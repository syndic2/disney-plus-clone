import { createSlice } from '@reduxjs/toolkit';

import { Movie } from '../../models';

const initialState = {
	movies: [] as Movie[]
};

const movieSlice = createSlice({
	name: 'movie',
	initialState: initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload;
		}
	}
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state: any) => state.movie.movies;
export default movieSlice.reducer;
