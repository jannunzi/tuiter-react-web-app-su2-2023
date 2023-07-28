import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewTodoTitle, addTodo } from "./todos";

function AddTodo() {
  const { newTodoTitle } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button
        onClick={() => dispatch(addTodo())}
        className="btn btn-sm btn-success float-end"
      >
        Add
      </button>
      <input
        onChange={(e) => dispatch(setNewTodoTitle(e.target.value))}
        value={newTodoTitle}
        type="text"
        className="form-control w-75"
      />
    </li>
  );
}

export default AddTodo;
