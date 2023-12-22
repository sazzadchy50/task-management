import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: "https://task-management-server-psi-hazel.vercel.app/api/v1/dashboard",
  baseURL:
    "https://task-management-server-psi-hazel.vercel.app/api/v1/dashboard",
});

const useSecureApi = () => {
  return axiosSecure;
};

export default useSecureApi;
