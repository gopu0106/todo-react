import { useState } from 'react';

// ToDoItem component - represents a single task
// Props: todo (object), onToggle (function), onDelete (function), onEdit (function)
function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
  // State to track if we're editing this item
  const [isEditing, setIsEditing] = useState(false);
  // State to track the new text while editing
  const [editText, setEditText] = useState(todo.text);

  // Handle saving the edited text
  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  // Handle canceling the edit
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      {isEditing ? (
        // Editing mode - show input field
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
            autoFocus
          />
          <button onClick={handleSave} className="btn save-btn">
            Save
          </button>
          <button onClick={handleCancel} className="btn cancel-btn">
            Cancel
          </button>
        </div>
      ) : (
        // View mode - show text and buttons
        <div className="view-mode">
          <span className="todo-text">{todo.text}</span>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)} className="btn edit-btn">
              Edit
            </button>
            <button onClick={() => onDelete(todo.id)} className="btn delete-btn">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDoItem;
