import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "Todo 1", completed: true },
    { id: 2, title: "Todo 2", completed: false, editing: true },
    { id: 3, title: "Todo 3", completed: false },
    { id: 4, title: "Todo 4", completed: true, editing: true },
  ],
  newTodoTitle: "New Todo",
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        title: state.newTodoTitle,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((t) => t.id !== action.payload.id);
      state.todos = newTodos;
    },
    editTodo: (state, action) => {
      const newTodo = {
        ...action.payload.todo,
        editing: action.payload.editing,
      };
      const newTodos = state.todos.map((t) => {
        if (t.id === action.payload.todo.id) {
          return newTodo;
        }
        return t;
      });
      state.todos = newTodos;
    },
    completeTodo: (state, action) => {
      const newTodos = state.todos.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      });
      state.todos = newTodos;
    },
    setNewTodoTitle: (state, action) => {
      state.newTodoTitle = action.payload;
    },
    updateTodoTitle: (state, action) => {
      const newTodo = { ...action.payload.todo, title: action.payload.title };
      const newTodos = state.todos.map((t) => {
        if (t.id === action.payload.todo.id) {
          return newTodo;
        }
        return t;
      });
      state.todos = newTodos;
    },
    setLoading: (state, action) => {},
    setError: (state, action) => {},
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  setNewTodoTitle,
  setLoading,
  setError,
  updateTodoTitle,
} = todosSlice.actions;
export default todosSlice.reducer;
