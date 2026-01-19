import { useState } from 'react';
import Header from './Header';
import ToDoList from './ToDoList';
import './index.css';

// Main App component - holds the state and manages todos
function App() {
  // State to hold all todos - each todo has id, text, and completed
  const [todos, setTodos] = useState([]);
  
  // State to hold the input text for new todos
  const [inputText, setInputText] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo = {
        id: Date.now(), // Simple unique ID using timestamp
        text: inputText,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputText(''); // Clear input after adding
    }
  };

  // Function to toggle the completed status of a todo
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to edit a todo's text
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="app-container">
      <Header />
      
      <div className="add-todo-section">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What do you need to do?"
          className="todo-input"
        />
        <button onClick={addTodo} className="btn add-btn">
          Add Task
        </button>
      </div>

      <ToDoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
