import React from "react";
import Todo from "./Todo";
import {Space} from 'antd'

const TaskList = ({todos, updateTodoCheck, updateTodoText, deleteTodo, deleteCheckedTodos } ) => {


  const listaTodos = todos.map(todo => (

    <Todo 
      key={todo.id} 
      todo={todo}
      updateTodoCheck={updateTodoCheck}
      updateTodoText={updateTodoText}
      deleteTodo={deleteTodo}
    />

  ));
  return (
    <div className="todo-list">

      {todos.length ? listaTodos : "No hay tareas"}
      {todos.length ? (
        <p style={{paddingTop:"25px"}} >
          <Space></Space>
          <button className="button blue" onClick={()=>{deleteCheckedTodos()}}>
            Eliminar todo lo terminado
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;