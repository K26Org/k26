import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://k26api.runasp.net/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosClient;
