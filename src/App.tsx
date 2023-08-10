import { useState } from "react";
import Home from "./components/Home";
import CreateTask from "./components/CreateTask";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [taskList, setTaskList] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

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
    <div className="bg-slate-300 h-screen">
      <h1 className="text-3xl text-center py-3">Homanager</h1>
      <Home toggleModal={toggleModal} taskList={taskList} deleteTask={deleteTask} />
      <div id="taskManager" className="text-center py-2">
        <CreateTask
          input={input}
          setInput={setInput}
          submitTask={submitTask}
          openModal={openModal}
        />
      </div>
    </div>
  );
}

export default App;
