import React, { useState } from "react";

const FormTodo = ({  onSubmit } ) => {

  const [description, setDescription] = useState(""); 
  const handleChange = e => {
    e.preventDefault(); 
    setDescription(e.target.value)
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="todo-list">
        <div className="file-input">
          <input
            type="text"
            className="text"
            onChange={handleChange}
          />
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Agregar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;