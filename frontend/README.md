Task Manager App
A simple task management application built with React, Vite, and plain CSS.
Features

View a list of tasks
Add new tasks (with validation for non-empty titles)
Mark tasks as completed
Delete tasks
Filter tasks by All, Pending, or Completed

Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)

Setup Instructions

Clone or download the project.
Navigate to the project directory:cd task-manager


Install dependencies:npm install


Start the development server:npm run dev


Open http://localhost:5173 in your browser.

How to Use

Enter a task title in the input field and click "Add" to create a new task.
Click on a task title to toggle its completion status.
Click the "Delete" button to remove a task.
Use the filter buttons (All, Pending, Completed) to view specific tasks.
If you try to add an empty task, an error message will appear.

Technical Details

Built with React 18 and Vite for fast development and builds
Styled with plain CSS for a clean, responsive design
Uses a hardcoded array of tasks stored in component state
Includes input validation to prevent empty task titles
Supports filtering tasks based on completion status
Modular structure with separate components for task form, filter, and list

Project Structure

src/App.jsx: Main component managing state and rendering child components
src/components/TaskForm.jsx: Handles task input and submission
src/components/TaskFilter.jsx: Manages filter controls
src/components/TaskList.jsx: Displays tasks with toggle and delete functionality
src/App.css: Contains all CSS styles
src/main.jsx: Entry point for React
index.html: HTML template

