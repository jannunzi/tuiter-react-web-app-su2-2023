import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Explore from "./explore";
import Home from "./home";
import Navigation from "./nav";
import Todos from "./todos";
import { useSelector } from "react-redux";

function Tuiter() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Tuiter</h1>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <div className="row">
        <div className="col-2">
          <Navigation />
        </div>
        <div className="col-8">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="todos" element={<Todos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
