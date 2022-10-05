import {
  ADD_TODO,
  UPDATE_TODO_CHECK,
  UPDATE_TODO_TEXT,
  DELETE_TODO,
  DELETE_CHECKED_TODOS,
} from "../actions/todoActions";

const initialState = {
  todos: [
    {
      text: "Tarea Ejemplo número UNO",
      id: "a1s5ds1",
      checked: false,
    },
    {
      text: "Tarea Ejemplo número DOS",
      id: "saadas4",
      checked: true,
    },
  ],
};

function todo(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(action);
      return {
        todos: [action.payload, ...state.todos],
      };

    case UPDATE_TODO_CHECK:
      console.log(action);
      return {
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        }),
      };
    case UPDATE_TODO_TEXT:
      console.log(action);
      return {
        todos: state.todos.map((todo) => {
          if (action.payload.id === todo.id) {
            return {
              ...todo,
              text: action.payload.text,
            };
          }
          return todo;
        }),
      };

    case DELETE_TODO:
      console.log(action);
      return {
        todos: state.todos.filter((todo) => {
          return todo.id !== action.payload.id;
        }),
      };

    case DELETE_CHECKED_TODOS:
      console.log(action);
      return {
        todos: state.todos.filter((todo) => {
          return todo.checked !== true;
        }),
      };

    default:
      return state;
  }
}

export default todo;
