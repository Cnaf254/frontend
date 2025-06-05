import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import './App.css';

// Main App component: Manages state and orchestrates child components
function App() {
  // State for tasks, initialized with sample data
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
  ]);
  // State for filter (all, pending, completed)
  const [filter, setFilter] = useState('all');

  // Add a new task with validation
  const addTask = (title) => {
    if (!title.trim()) return false; // Validation handled in TaskForm
    const newTask = { id: tasks.length + 1, title: title.trim(), completed: false };
    setTasks([...tasks, newTask]);
    return true;
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task by ID
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app-container">
      <h1 className="app-title">Task Manager</h1>
      {/* Form to add new tasks */}
      <TaskForm onAddTask={addTask} />
      {/* Filter controls for task list */}
      <TaskFilter filter={filter} setFilter={setFilter} />
      {/* List of tasks with toggle and delete functionality */}
      <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;