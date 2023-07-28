import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../labs/lab4/todos/TodosAppState/AddTodo";
import TodoList from "../labs/lab4/todos/TodosAppState/TodoList";

function Todos() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      <h3>Todos</h3>

      <AddTodo />

      <TodoList />

      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item">{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
