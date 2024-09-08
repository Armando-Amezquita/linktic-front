import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4500",
});

instance.interceptors.request.use((config, error) => {
    if (error) {
        return Promise.reject(error);
    }
    const ulang = localStorage.getItem("user-language") || "es";
    if (ulang) {
        config.headers.common["user-language"] = ulang;
    }
    return config;
});

export default {
    ...instance
};