import { useState } from 'react';

// TaskForm component: Handles task input and submission
function TaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      setError('Task title cannot be empty');
      return;
    }
    const success = onAddTask(newTask);
    if (success) {
      setNewTask('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default TaskForm;