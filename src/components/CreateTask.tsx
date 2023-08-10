interface CreateTaskProps {
  openModal: boolean;
  input: string;
  setInput: (value: string) => void;
  submitTask: () => void;
}

const CreateTask = ({openModal, input, setInput, submitTask}: CreateTaskProps) => {

  if (!openModal) return null;

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(task) => setInput(task.target.value)}
        className="border-2 px-1 py-0.5 bg-lime-50 rounded-md"
      />
      <button type="button" onClick={submitTask} className="px-2">
        Submit Task
      </button>
    </div>
  );
};

export default CreateTask;