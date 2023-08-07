import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "../labs/lab4/todos/TodosAppState/todos";
import userReducer from "../labs/lab5/users/user-reducer";

const store = configureStore({
  reducer: { todosReducer, user: userReducer },
});

export default store;
