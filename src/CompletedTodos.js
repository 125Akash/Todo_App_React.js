import React from 'react';
import './CompletedTodos.css'; //css for completed todos
//function CompletedTodos it has to seperate because of to display completed todos
function CompletedTodos({ completedTodos, onMoveToActive }) {
  return (
    <div className="completed-todos">
      <h2>Completed TODOs</h2>
      <ul className="completed-todo-list"> 
        {completedTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{' '}
            <button
              className="move-to-active-button"
              onClick={() => onMoveToActive(todo.id)}
            >
              Back to Active
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTodos;
