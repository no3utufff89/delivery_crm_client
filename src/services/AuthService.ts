import { AuthResponse, SignInResponse, SignUpResponse } from "../types/types";
import Endpoints from "../api/endpoints";
import instance from "../api/instance";
import { AxiosResponse } from "axios";

export default class AuthService {

    static async login(login: string, password: string):Promise<AxiosResponse<AuthResponse<SignInResponse>>> {
        return instance.post<AuthResponse<SignInResponse>>(Endpoints.AUTH.LOGIN, {login,password});
    }

    static async registration(
        login: string, 
        password: string,
        firstName: string, 
        lastName: string, 
    ):Promise<AxiosResponse<AuthResponse<SignUpResponse>>> {
        return instance.post<AuthResponse<SignUpResponse>>(Endpoints.AUTH.LOGIN, {login,password,firstName,lastName});
    }

    static async logout():Promise<void> {
        await instance.post(Endpoints.AUTH.LOGOUT);
    }
}