import axios from "axios";

const SERVER_URL = "http://localhost:8080";

const server = axios.create({
    baseURL:SERVER_URL,
})

server.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default server ;