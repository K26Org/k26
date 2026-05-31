import axiosClient from "./axiosClient";

const courseApi = {
    getAll: () => axiosClient.get("/Public/Course"),

    getBySlug: (slug) =>
        axiosClient.get(`/Public/Course/${slug}`)
};

export default courseApi;