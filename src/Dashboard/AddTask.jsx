import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
// import { Datepicker } from 'flowbite-react';
import { Link } from "react-router-dom";
const AddTask = () => {
  return (
    <div>
      <h2>Create Task</h2>

      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Task Title" />
          </div>

          <TextInput
            id="title"
            type="text"
            placeholder="Task title here..."
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
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="deadline" value="Deadline" />
          </div>
          <Datepicker minDate={new Date()} />
        </div>

        <Button type="submit" outline gradientDuoTone="purpleToPink">
          Add Task
        </Button>
      </form>
    </div>
  );
};

export default AddTask;
