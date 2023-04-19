import Cookies from "js-cookie";
import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  timeout: 20000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get("access_token");

    // if (!accessToken) {
    // Cookies.remove("name");
    // window.location.replace("/");
    // }

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    // if (response && response.data) {
    //   return response.data;
    // }

    return response;
  },
  (error) => {
    console.log(error)
    switch (error.response?.status) {
      case 401:
        // if (!error.response.request.responseURL.includes("/auth/login")) {
        //   window.location.replace("/logout");
        // }
        Cookies.remove("access_token");
        break;
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
