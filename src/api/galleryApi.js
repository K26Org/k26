import axiosClient from "./axiosClient";

export const getGalleryList = async () => {
    const response = await axiosClient.get("/Public/Gallery");
    return response.data;
};