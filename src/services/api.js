import axios from "axios";

// const api = axios.create({ baseURL: "http://localhost:8080/api" });
const api = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});
export default api;
