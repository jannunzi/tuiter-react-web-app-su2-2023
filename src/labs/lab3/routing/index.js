import Login from "./login";
import Register from "./register";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./add";
import Subtract from "./subtract";

function RoutingExercise() {
  return (
    <div>
      <h1>Routing Exercise</h1>
      <Link to="login">Login</Link> | <Link to="register">Register</Link> |{" "}
      <Link to="add">Add</Link> | <Link to="subtract/10/5">Subtract</Link>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="add" element={<Add a="2" b="3" />} />
        <Route path="subtract/:x/:y" element={<Subtract />} />
      </Routes>
      <Add a="12" b="23" />
      {/* <Subtract x="10" y="5" /> */}
    </div>
  );
}

export default RoutingExercise;
