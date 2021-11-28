import { configureStore } from '@reduxjs/toolkit';

import authSlice from '../store/auth/slice';
import movieSlice from '../store/movie/slice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		movie: movieSlice
	}
});
