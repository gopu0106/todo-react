# To-Do List Application

A simple and clean To-Do List application built with React and Vite for managing your daily tasks.

## What This Project Does

This is a functional To-Do List application that allows you to:

-  Add new tasks
-  Edit existing tasks (inline editing)
-  Delete tasks
-  Mark tasks as completed (with line-through effect)
-  View all your tasks in an organized list

The application is built using **React functional components** and **useState hooks** for state management. It demonstrates proper use of props, component composition, and React's list rendering with unique keys.

## Features

- **Functional Components**: Uses modern React functional components
- **State Management**: Uses useState hook in App component
- **Props**: Properly passes state and handler functions between components
- **List Rendering**: Uses map() to render todos with unique keys
- **Clean UI**: Simple and user-friendly interface with CSS styling
- **Completed Tasks**: Line-through styling for completed tasks
- **No External Dependencies**: Pure React without Redux or backend

## Project Structure

```
src/
├── App.jsx          # Main component with state management
├── Header.jsx       # Displays app title
├── ToDoList.jsx     # Renders the list of todos
├── ToDoItem.jsx     # Individual todo item component
└── index.css        # All styling
```

## How to Install Dependencies

1. Make sure you have **Node.js** installed (version 18 or higher)
2. Open terminal in the project directory
3. Run the following command:

```bash
npm install
```

This will install all the required dependencies including React, React-DOM, and Vite.

## How to Run the App

After installing dependencies, run the development server:

```bash
npm run dev
```

The app will start and you'll see a message like:

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and go to **http://localhost:5173/** to see the app.

## How to Use

1. **Add a Task**: Type your task in the input field and click "Add Task" or press Enter
2. **Mark as Complete**: Click the checkbox next to a task to mark it as done
3. **Edit a Task**: Click the "Edit" button, modify the text, and click "Save"
4. **Delete a Task**: Click the "Delete" button to remove a task

## Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS** - For styling (no external CSS frameworks)

## Academic Notes

This project demonstrates:

- React functional components
- useState hook for state management
- Props for passing data and functions
- Map function for rendering lists
- Unique keys for list items
- Event handling
- Conditional rendering
- CSS styling

---

**Developed as a college assignment for B.Tech IT**
