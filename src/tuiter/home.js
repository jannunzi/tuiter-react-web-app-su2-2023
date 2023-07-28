import AddTodo from "../labs/lab4/todos/TodosAppState/AddTodo";
import Tuit from "./tuit";
import TuitList from "./tuit-list";
import tuits from "./tuits";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <AddTodo />
      <TuitList tuits={tuits} />
      <pre>{JSON.stringify(tuits, null, 2)}</pre>
    </div>
  );
}

export default Home;
