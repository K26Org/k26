import axiosClient from "./axiosClient";

const contactApi = {

    create: (data) =>
        axiosClient.post(
            "/contact",
            data
        )

};

export default contactApi;