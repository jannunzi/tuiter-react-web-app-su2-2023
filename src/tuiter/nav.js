import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const pathElements = location.pathname.split("/");

  const screen = pathElements[2];
  console.log(screen);

  const screens = ["home", "explore", "bookmarks", "lists", "profile", "more"];

  return (
    <div className="list-group">
      {screens.map((_screen) => (
        <Link
          to={`/tuiter/${_screen}`}
          className={`text-capitalize list-group-item ${
            _screen === screen ? "active" : ""
          }`}
        >
          {_screen}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
