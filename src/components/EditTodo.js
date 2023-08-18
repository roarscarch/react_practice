import React, { useState } from 'react';

function EditTodo({ todoIndex, todoText, onEdit }) {
  const [editedText, setEditedText] = useState(todoText);

  const handleEdit = () => {
    onEdit(todoIndex, editedText);
  };

  return (
    <div>
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
}

export default EditTodo;
