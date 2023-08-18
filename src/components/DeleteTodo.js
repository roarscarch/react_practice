import React from 'react';

function DeleteTodo({ todoIndex, onDelete }) {
  const handleDelete = () => {
    onDelete(todoIndex);
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
}

export default DeleteTodo;
