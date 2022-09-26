import React, { useState } from "react";
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux'
import { getId } from "../utils";
import { addTodo, updateTodoText, updateTodoCheck, deleteTodo, deleteCheckedTodos } from "../redux/actions/todoActions";
import TaskList from "./TaskList";
import FormTodo from "./FormTodo";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;



const Container = ({ todo, addTodo, updateTodoCheck, updateTodoText, deleteTodo, deleteCheckedTodos }) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = e.target[0].value

    addTodo({
      text,
      checked: false,
      id: getId()
    })

    e.target[0].value = ''
  }

  return (
    <Layout>
      <Content>
        <Title level={2} >Lista de Tareas</Title>
        <FormTodo 
          onSubmit={handleSubmit}
        />
        <TaskList
          todos={todo.todos}
          updateTodoCheck={updateTodoCheck}
          updateTodoText={updateTodoText}
          deleteTodo={deleteTodo} 
          deleteCheckedTodos={deleteCheckedTodos}
        />        
      </Content>

    </Layout>
  );

  

};

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    updateTodoCheck: (todo) => dispatch(updateTodoCheck(todo)),
    updateTodoText: (todo) => dispatch(updateTodoText(todo)),
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    deleteCheckedTodos:()=> dispatch(deleteCheckedTodos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)