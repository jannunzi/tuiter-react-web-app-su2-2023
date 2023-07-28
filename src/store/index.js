import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../labs/lab4/todos/TodosAppState/todos";

const store = configureStore({
  reducer: { todosReducer },
});

export default store;
