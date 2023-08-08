interface CreateTaskProps {
  input: string;
  setInput: (value: string) => void;
  submitTask: () => void;
}

const CreateTask = ({input, setInput, submitTask}: CreateTaskProps) => {

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(task) => setInput(task.target.value)}
        className="border-2 px-1 py-0.5 bg-sky-50 rounded-md"
      />
      <button type="button" onClick={submitTask} className="px-2">
        Create Task
      </button>
    </div>
  );
};

export default CreateTask;
