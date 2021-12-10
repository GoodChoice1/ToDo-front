import axios from "axios";

const netClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 3000,
});

const tokenInterceptor = (config) => {
  const token = localStorage.accessToken;
  if (token) {
    config.headers.token = token;
  }
  return config;
};

const wrongTokenInterceptor = (response) => {
    console.warn(response.status == 500);
  };

netClient.interceptors.request.use(tokenInterceptor);
netClient.interceptors.response.use(wrongTokenInterceptor);

export default netClient;
