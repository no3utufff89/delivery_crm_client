import { createSlice } from "@reduxjs/toolkit";
import { AuthState, SignInResponse } from "../../../types/types";
import { checkAuth, logoutUser, signInUserRequest } from "./requests";
const initialState: AuthState<SignInResponse> = {
    isLoading: false,
    isAuthenticated: false,
}
const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
       
    },
    selectors: {
    },
    extraReducers(builder) {
        builder
            .addCase(signInUserRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(signInUserRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                    state.user = action.payload.data.user;
                    state.isAuthenticated = true;
                    state.token = action.payload.data.accsessToken;
                } else {
                    state.error = action.payload
                }
            })
            //checkAuth
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                if (action.payload?.data) {
                   
                    state.user = action.payload.data.user;
                    state.isAuthenticated = true;
                    state.token = action.payload.data.accsessToken;
                } else {
                    state.error = action.payload
                }
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.token = null;
                state.user = null;
                

            })
           
    }

});
export default usersSlice.reducer;