import useGetTask from "../../Hook/useGetTask";
import { FaEye } from "react-icons/fa";

const PreviousTask = () => {
  const [taskData, refetch, isLoading] = useGetTask();
  console.log("called hook", taskData?.length);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="shadow-lg">
        <h2 className="text-2xl font-bold text-center border-b-2 pb bg-gray-100 p-2 text-red-500">
          Task
        </h2>
        <ul className="p-5">
          {taskData?.map((item) => (
            <>
              <li className="flex justify-between items-center border mb-2 p-2 rounded-lg ">
                {item?.taskTitle}
                <FaEye />
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="shadow-lg ">
        <h2 className="text-2xl font-bold text-center border-b-2 pb bg-gray-100 p-2 text-orange-400">
          On Going
        </h2>
        <ul></ul>
      </div>
      <div className="shadow-lg">
        <h2 className="text-2xl font-bold text-center border-b-2 pb bg-gray-100 p-2 text-green-400">
          Completed
        </h2>
      </div>
    </div>
  );
};

export default PreviousTask;
