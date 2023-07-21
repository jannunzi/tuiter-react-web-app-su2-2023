import { Navigate, Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Explore from "./explore";
import Home from "./home";
import Navigation from "./nav";

function Tuiter() {
  return (
    <div>
      <h1>Tuiter</h1>
      <div className="row">
        <div className="col-2">
          <Navigation />
        </div>
        <div className="col-8">
          <Routes>
            <Route path="/" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
