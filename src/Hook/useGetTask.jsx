import { useQuery } from "@tanstack/react-query";
import useSecureApi from "./useSecureApi";


const useGetTask = () => {
  const SecureApi = useSecureApi()
    const {data: taskData=[], refetch, isPending:isLoading}=useQuery({
        queryKey:["taskData"],
        queryFn : async()=>{
            const res = await SecureApi.get("/get-tasks")
            return res.data
        }
    })

    return [taskData, refetch, isLoading]
};

export default useGetTask;