import axios from "axios";

const API = axios.create({
  baseURL: "https://job-portal-app-1rfk.onrender.com/api"
});

export default API;