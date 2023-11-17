import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../helpers/persistance-storage';

const initialState = {
    isLoading: false,
    loggenIn: false,
    error: null,
    user: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: (state) => {
            state.isLoading = true;
        },
        signUserSuccess: (state, action) => {
            state.loggenIn = true;
            state.isLoading = false;
            state.user = action.payload;
            setItem('token', action.payload.token);
        },
        signUserFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        logoutUser: (state) => {
            state.loggenIn = false;
            state.user = null;
        },
    },
});

export const { signUserFailure, signUserStart, signUserSuccess, logoutUser } =
    authSlice.actions;

export default authSlice.reducer;
