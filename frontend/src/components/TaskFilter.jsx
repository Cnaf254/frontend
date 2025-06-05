// TaskFilter component: Handles task filtering (all, pending, completed)
function TaskFilter({ filter, setFilter }) {
  return (
    <div className="filter-group">
      <button
        onClick={() => setFilter('all')}
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`filter-button ${filter === 'pending' ? 'active' : ''}`}
      >
        Pending
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;