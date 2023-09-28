import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit, onComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
 //save edited text
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (editedText.trim() !== '') {
      onEdit(todo.id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-card ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            className='todo-edit-input'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="todo-edit" onClick={handleSaveEdit}>Save</button>
        </div>
      ) : (
        <>
          <div className="todo-text" onClick={onToggle}>
            {todo.text}
          </div>
          {!todo.completed ? (
            <div className="todo-actions">
              <button className="deleteButton" onClick={onDelete}>Delete</button>
              <button className='editButton' onClick={handleEditClick}>Edit</button>
              <button className='completeButton' onClick={() => onComplete(todo.id)}>Mark As Complete</button>
            </div>
          ) : null} 
        </>
      )}
    </div>
  );
}

export default TodoItem;
