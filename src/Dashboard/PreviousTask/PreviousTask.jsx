import { useState } from "react";
import useGetTask from "../../Hook/useGetTask";
import { FaEye } from "react-icons/fa";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskOngoing from "./TaskOngoing";

const PreviousTask = () => {
  const [taskData, refetch, isLoading] = useGetTask();
  const [onGoing, setOnGoing] = useState([]);

  console.log("called hook", taskData?.length);

  // const dragStarted = (e, id) => {
  //   console.log("drag has started");
  //   e.dataTransfer.setData("taskId", id);
  // };

  // const draggingOver = (e) => {
  //   e.preventDefault();
  //   console.log("dragging over here");
  // };

  // const dragDropped = (e) => {
  //   e.preventDefault();
  //   console.log("You dropped task to on-going");
  //   let transferredTaskId = e.dataTransfer.getData("taskId");
  //   console.log('on-going task id',transferredTaskId);
  // };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* task */}
      <DragDropContext >
        <div className ="shadow-lg">
          <h2 className="text-2xl font-bold text-center border-b-2 pb bg-gray-100 p-2 text-red-500">
            Task
          </h2>
          {/* <Draggable draggableId="todoTask">
            {(provided) => (
              <ul className="p-5 min-h-80 " 
              ref={provided.innerRef} 
              {...provided.draggableProps}
              {...provided.dragHandleProps}

              >
                {taskData?.map((item) => (
                  <>
                    <li
                      
                      draggable
                      // onDragStart={(e) => dragStarted(e, item?._id)}
                      className="flex justify-between items-center border mb-2 p-2 rounded-lg bg-gray-400"
                    >
                      {item?.taskTitle}
                      <FaEye />
                    </li>
                  </>
                ))}
              </ul>
            )}
          </Draggable> */}
        </div>
        {/* on-Going  */}
        <div className="shadow-lg ">
         
          {/* <TaskOngoing  /> */}
        </div>
        {/* Completed tasks */}
        <div className="shadow-lg">
          
        </div>
      </DragDropContext>
    </div>
  );
};

export default PreviousTask;
