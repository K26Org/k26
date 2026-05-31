import axiosClient from "./axiosClient";

export const getActiveBatches = async () => {
    const response = await axiosClient.get("/Public/Batch");
    return response.data;
};