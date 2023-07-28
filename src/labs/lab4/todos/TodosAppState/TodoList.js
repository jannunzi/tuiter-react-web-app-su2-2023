import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";

import {
  setNewTodoTitle,
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  updateTodoTitle,
} from "./todos";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, newTodoTitle } = useSelector((state) => state.todosReducer);

  return (
    <ul className="list-group">
      <AddTodo />
      {todos.map((todo) => (
        <li className="list-group-item">
          {todo.editing ? (
            <>
              <button
                onClick={() =>
                  dispatch(
                    editTodo({
                      todo,
                      editing: false,
                    })
                  )
                }
                className="btn btn-primary float-end"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  dispatch(
                    editTodo({
                      todo,
                      editing: true,
                    })
                  )
                }
                className="btn btn-primary float-end"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo))}
                className="btn btn-danger float-end"
              >
                Delete
              </button>
            </>
          )}
          <input
            type="checkbox"
            onChange={() => dispatch(completeTodo(todo))}
            checked={todo.completed}
            className="me-2 float-start"
          />
          {todo.editing ? (
            <input
              onChange={(e) =>
                dispatch(
                  updateTodoTitle({
                    todo,
                    title: e.target.value,
                  })
                )
              }
              value={todo.title}
              type="text"
              className="w-75 form-control"
            />
          ) : (
            <span>{todo.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
