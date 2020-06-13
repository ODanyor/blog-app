import axios from "axios";
import { getStoredAuthToken } from "shared/utils/authToken";

const defaults = {
  baseURL: process.env.API_URL || "http://localhost:5050",
  headers: () => ({
    "Content-Type": "application/json",
    Authorization: getStoredAuthToken()
      ? `Bearer ${getStoredAuthToken()}`
      : undefined,
  }),
};

const api = async (method, url, variable) => {
  return await axios({
    method,
    url: `${defaults.baseURL}${url}`,
    data: method !== "get" ? variable : undefined,
    headers: defaults.headers(),
  });
};

export default {
  get: (...args) => api("get", ...args),
  post: (...args) => api("post", ...args),
  delete: (...args) => api("delete", ...args),
  update: (...args) => api("update", ...args),
};
