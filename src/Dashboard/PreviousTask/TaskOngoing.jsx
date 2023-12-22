import { Container } from 'postcss';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

const TaskOngoing = () => {
    return (
        <Container>
             <h2 className="text-2xl font-bold text-center border-b-2 pb bg-gray-100 p-2 text-orange-400 ">
            On Going
          </h2>
          
          <Droppable droppableId={"_id"}>
            {(provided) => (
              <ul
                ref={provided.innerRef}
                {...provided.droppableProps}
                // isDraggingOver={snapshot.isDraggingOver}
                // onDragOver={(e) => draggingOver(e)}
                // onDrop={(e)=>dragDropped(e)}
                className="min-h-80 "
              >
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </Container>
    );
};

export default TaskOngoing;