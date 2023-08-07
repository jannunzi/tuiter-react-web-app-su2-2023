import Lab3 from "./lab3";
import Lab4 from "./lab4";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Lab5 from "./lab5";

function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <Link to="lab3">Lab 3</Link> | <Link to="lab4">Lab 4</Link> |{" "}
      <Link to="lab5">Lab 5</Link>
      <Routes>
        <Route path="/" element={<Navigate to="lab3" />} />
        {/* <Route path="lab3" element={<Lab3 />} /> */}
        <Route path="lab3/*" element={<Lab3 />} />
        <Route path="lab4" element={<Lab4 />} />
        <Route path="lab5/*" element={<Lab5 />} />
      </Routes>
    </div>
  );
}

export default Labs;
