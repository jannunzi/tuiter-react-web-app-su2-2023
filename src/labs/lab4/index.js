import TodosAppState from "./todos/TodosAppState";
import TodosLocalState from "./todos/TodosLocalState";

function Lab4() {
  console.log("this is Lab 4");
  return (
    <div>
      <h2>Lab 4</h2>
      <TodosAppState />
      <TodosLocalState />
    </div>
  );
}

export default Lab4;
