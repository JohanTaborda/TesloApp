import axios from "axios";

const BASE_URL_BACKEND = import.meta.env.VITE_URL_API_BACKEND;

export const Api = axios.create({
    baseURL: `${BASE_URL_BACKEND}`
})