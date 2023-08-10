import Task from "./Task";

interface HomeProps {
  taskList: string[];
  deleteTask: (i: number) => void;
  toggleModal: () => void;
}

const Home = ({toggleModal, taskList, deleteTask}: HomeProps) => {

  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="p-2">
      {week.map((day) => (
        <div className="flex p-1 border bg-sky-50" onClick={toggleModal}>
          <div className="flex w-1/4">{day}</div>
          <div className="flex w-3/4">
            <Task taskList={taskList} deleteTask={deleteTask} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
