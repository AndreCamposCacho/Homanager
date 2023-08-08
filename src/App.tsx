import { useState } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const submitTask = () => {
    setTaskList([...taskList, input]);
    setInput("");
  };

  const deleteTask = (i: number) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(i, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div className="bg-amber-100 h-screen">
      <h1 className="text-3xl text-center py-3">Homanager</h1>
      <div id="taskManager" className="text-center py-2">
        <CreateTask input={input} setInput={setInput} submitTask={submitTask} />
        <Task taskList={taskList} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;