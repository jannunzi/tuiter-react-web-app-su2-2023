import React from "react";
import Tuit from "./tuit";
function TuitList({ tuits }) {
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <li className="list-group-item">
          <Tuit tuit={tuit} />
        </li>
      ))}
    </ul>
  );
}

export default TuitList;
