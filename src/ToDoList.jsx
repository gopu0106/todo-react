import ToDoItem from './ToDoItem';

// ToDoList component - renders the list of todos using map
// Props: todos (array), onToggle (function), onDelete (function), onEdit (function)
function ToDoList({ todos, onToggle, onDelete, onEdit }) {
  // If no todos, show a friendly message
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 No tasks yet! Add one above to get started.</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {/* Use map() to render each todo with a unique key */}
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
