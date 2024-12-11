import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse, SignInRequest, SignInResponse, SignUpRequest } from "../../../types/types";
import AuthService from "../../../services/AuthService";
import axios, { isAxiosError } from "axios";
import Endpoints from "../../../api/endpoints";
import { API_BASE_URL } from "../../../api/api_constants";

export const signUpUserRequest = createAsyncThunk(
    'users/signUp',
    async (newUser: SignUpRequest) => {
        const {login,password,firstName,lastName} = newUser;
        const response = await AuthService.registration(login,password,firstName,lastName);
        return response;
    }
);

export const signInUserRequest = createAsyncThunk(
    'users/login',
    async (user: SignInRequest) => {
        const {login, password} = user;
        try {
            const response = await AuthService.login(login, password);
            console.log(`response`,response);
            if(response.status === 200) {
                localStorage.setItem('Bearer', response.data.accsessToken);
            }
            return response;
        } catch (error) {
            if(isAxiosError(error)) {
                return error.response?.data
            }
        }
    }
);

export const checkAuth = createAsyncThunk(
    'users/checkAuth',
    async () => {
       try {
        const response = await axios.get<AuthResponse<SignInResponse>>(`${API_BASE_URL}${Endpoints.AUTH.REFRESH}`, {withCredentials: true});        
        if(response.status === 200) {
            localStorage.setItem('Bearer', response.data.accsessToken);
        } 
        return response;
       } catch (error) {
        if(isAxiosError(error)) {
            return error.response?.data
        }
    }
    }
)
export const logoutUser = createAsyncThunk(
    'users/logout',
    async () => {
        await AuthService.logout();
        localStorage.removeItem('Bearer');
    }
)
