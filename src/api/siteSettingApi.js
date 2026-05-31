import axiosClient from "./axiosClient";

const siteSettingApi = {
    get: () => axiosClient.get("/Public/SiteSetting")
};

export default siteSettingApi;