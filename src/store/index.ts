import { configureStore } from '@reduxjs/toolkit';

import movieSlice from '../store/movie/slice';

export const store = configureStore({
	reducer: {
		movie: movieSlice
	}
});
