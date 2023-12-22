import axios from "axios";

const axiosPublic = axios.create({
  baseURL:
    "https://task-management-server-psi-hazel.vercel.app/api/v1/dashboard",
});

const usePublicApi = () => {
  return axiosPublic;
};

export default usePublicApi;
