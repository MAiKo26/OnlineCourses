export const Task = (props) => {
  return (
    <h1 style={{ color: props.color }}>
      {props.taskName}
      <button onClick={() => props.greenTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}> - </button>
    </h1>
  );
};
