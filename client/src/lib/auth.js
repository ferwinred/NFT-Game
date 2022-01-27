import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
const { REACT_APP_SERVER } = process.env;

if (!REACT_APP_SERVER)
  console.error("Please provide the REACT_APP_SERVER env variable");

axios.defaults.baseURL = REACT_APP_SERVER

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers["x-token-access"] = token;
  config.headers["Content-Type"] = "application/json";
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);
