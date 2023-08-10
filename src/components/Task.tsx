interface TaskProps {
  taskList: string[];
  deleteTask: (i: number) => void;
}

const Task = ({taskList, deleteTask}: TaskProps) => {

  return (
    <>
      {taskList.map((task: string, i: number) => (
        <li key={i} className="bg-amber-50">
          <label>{task}</label>
          <input type="checkbox" />
          <button type="button" onClick={() => deleteTask(i)}>
            X
          </button>
        </li>
      ))}
    </>
  );
};

export default Task;