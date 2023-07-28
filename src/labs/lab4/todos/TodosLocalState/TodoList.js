import AddTodo from "./AddTodo";

function TodoList({
  handleAddClick,
  newTodoTitle,
  setNewTodoTitle,
  todos,
  handleEditClick,
  handleDeleteClick,
  handleCompletedClick,
  handleTitleChange,
}) {
  return (
    <ul className="list-group">
      <AddTodo
        handleAddClick={handleAddClick}
        newTodoTitle={newTodoTitle}
        setNewTodoTitle={setNewTodoTitle}
      />
      {todos.map((todo) => {
        return (
          <li className="list-group-item">
            {todo.editing ? (
              <>
                <button
                  onClick={() => handleEditClick(todo, false)}
                  className="float-end btn btn-sm btn-primary float-right"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEditClick(todo, true)}
                  className="float-end btn btn-sm btn-primary float-right"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(todo)}
                  className="float-end btn btn-sm btn-danger float-right"
                >
                  Delete
                </button>
              </>
            )}

            <input
              type="checkbox"
              onChange={() => handleCompletedClick(todo)}
              checked={todo.completed}
              className="me-2 float-start"
            />
            {todo.editing ? (
              <input
                onChange={(e) => handleTitleChange(e, todo)}
                value={todo.title}
                type="text"
                className="w-75 form-control"
              />
            ) : (
              <span>{todo.title}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
