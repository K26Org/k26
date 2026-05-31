import axiosClient from "./axiosClient";

export const getInstructors = async () => {
    const response = await axiosClient.get("/Public/Instructor");
    return response.data;
};