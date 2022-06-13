

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO_SAGA":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      case "GET_TODO_SAGA":
        console.log('Test Get_ToDo_Saga_Reducer')
        return {
          ...state,
          todos: action.payload
        };
    case "DELETE_TODO_SAGA":
      const newTodo = [...state.todos].filter((t) => t.id !== action.id);
      return {
        ...state,
        todos: newTodo,
      };
    case "CHECK_TODO_SAGA":
      const todo2 = [...state.todos].find((todo) => todo.id === action.id);
      todo2.status = action.payload;
      return {
        ...state,
        todos: [...state.todos],
      };
    case "SAVE_TODO_SAGA":
      const todoSave = [...state.todos].find((todo) => todo.id === action.id);
      todoSave.title = action.text;
      return {            
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};
export default todoReducer;
