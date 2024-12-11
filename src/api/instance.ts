import axios, { InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL } from "./api_constants";
const instance = axios.create({
    withCredentials: true,
    baseURL: API_BASE_URL,
});


instance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    // Add your own logic here
    config.headers.Authorization = `Bearer ${localStorage.getItem('Bearer')}`;
    return config;
}) 

export default instance;