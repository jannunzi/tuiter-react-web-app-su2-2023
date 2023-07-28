function TodosTitleComponent({ newTodoTitle }) {
  return (
    <h3
      onClick={() => {
        alert("hello world");
      }}
    >
      TodosLocalState {newTodoTitle}
    </h3>
  );
}

export default TodosTitleComponent;
