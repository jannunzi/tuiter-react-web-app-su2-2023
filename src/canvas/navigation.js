import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="list-group">
      <Link className="list-group-item" to={`/canvas`}>
        Dashboard
      </Link>
      <Link className="list-group-item" to={`/canvas/users`}>
        Users
      </Link>
    </div>
  );
}

export default Navigation;
