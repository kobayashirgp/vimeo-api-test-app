import axios from "axios";

const API = "https://api.vimeo.com/";

let axiosConnection = axios.create({
  baseURL: API
});

axiosConnection.interceptors.request.use(config => {
  const token = "ed94d517b10fae1b8a815fea08b46bf8";
  if (token) {
    config.headers = { Authorization: "Bearer " + token };
  }
  return config;
});

export default axiosConnection;
