function AddTodo({ handleAddClick, newTodoTitle, setNewTodoTitle }) {
  return (
    <li className="list-group-item">
      <button
        onClick={handleAddClick}
        className="btn btn-sm btn-success float-end"
      >
        Add
      </button>
      <input
        value={newTodoTitle}
        type="text"
        onChange={(e) => {
          const title = e.target.value;
          setNewTodoTitle(title);
        }}
        className="form-control w-75"
      />
    </li>
  );
}

export default AddTodo;
