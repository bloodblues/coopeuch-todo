
export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO_CHECK = 'UPDATE_TODO_CHECK'
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT'
export const DELETE_TODO = 'DELETE_TODO'
export const DELETE_CHECKED_TODOS = 'DELETE_CHECKED_TODOS'


export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
})

export const updateTodoCheck = (todo) => ({
  type: UPDATE_TODO_CHECK,
  payload: todo
})
export const updateTodoText = (todo) => ({
  type: UPDATE_TODO_TEXT,
  payload: todo
})

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: todo
})

export const deleteCheckedTodos = () => ({
  type: DELETE_CHECKED_TODOS
})