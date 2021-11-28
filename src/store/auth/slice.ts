import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	email: '',
	photo: ''
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {
		setSignIn: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.photo = action.payload.photo;
		},
		setSignOut: state => {
			state.name = '';
			state.email = '';
			state.photo = '';
		}
	}
});

export const { setSignIn, setSignOut } = authSlice.actions;
export const selectAuthName = (state: any) => state.auth.name;
export const selectAuthEmail = (state: any) => state.auth.email;
export const selectAuthPhoto = (state: any) => state.auth.photo;
export default authSlice.reducer;
