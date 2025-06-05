// TaskList component: Displays tasks with toggle and delete functionality
function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.completed ? 'completed' : ''}`}
        >
          <span
            onClick={() => onToggleTask(task.id)}
            className="task-title"
          >
            {task.title}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="delete-button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;