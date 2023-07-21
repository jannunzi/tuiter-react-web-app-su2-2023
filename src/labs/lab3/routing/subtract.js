import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Subtract() {
  const { pathname } = useLocation();
  const { x, y } = useParams();

  const z = x - y;

  return (
    <div>
      {z}
      {/* <h1>Subtract</h1>x = {x}, y = {y}
      <br />x - y = {z}
      <br />
      <pre>{JSON.stringify(pathname, null, 2)}</pre>
      <pre>{JSON.stringify(parameters, null, 2)}</pre> */}
    </div>
  );
}

export default Subtract;
