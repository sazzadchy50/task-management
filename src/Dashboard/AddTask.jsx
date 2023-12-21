import { useQuery } from "@tanstack/react-query";
import { Button, Datepicker, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import { useForm} from "react-hook-form";

import usePublicApi from "../Hook/usePublicApi";
import Swal from "sweetalert2";

const AddTask = () => {
  const { register, handleSubmit,} = useForm();
  const [selectedDate, setSelectedDate] = useState(null);
  const publicApi = usePublicApi();

  const onSubmit = async (data) => {
    console.log(data);

    const taskData = {
      taskTitle: data?.taskTitle,
      taskDescription: data?.taskDescription,
      deadline: selectedDate?.toISOString(),
      priority: data?.priority
    };

    if (taskData?.taskTitle && taskData?.taskDescription) {
      const taskRes = await publicApi.post("/add-a-task", taskData);

      if (taskRes.data.insertedId) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: `${data.taskTitle} added to task successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="">
      <h2 className="text-5xl text-center my-10 font-semibold">Add Task</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full lg:w-1/2 p-5 flex-col gap-4 container mx-auto shadow-lg "
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Task Title" />
          </div>

          <TextInput
            id="title"
            type="text"
            placeholder="Task title here..."
            {...register("taskTitle")}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Task Description" />
          </div>

          <Textarea
            id="description"
            type="text"
            placeholder="Task description here..."
            {...register("taskDescription")}
            required
            shadow
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="deadline" value="Deadline" />
          </div>
          <Datepicker
            minDate={new Date()}
            onSelectedDateChanged={handleDateChange}
          />

        </div>
        <div>
         <div className="mb-2 block">
          
           <Label value="Priority" />
         </div>
          <select className="border-gray-300 w-full rounded-lg bg-gray-50" {...register("priority")}>
            <option  value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">high</option>
          </select>
        </div>

        <Button type="submit" outline gradientDuoTone="purpleToPink">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
