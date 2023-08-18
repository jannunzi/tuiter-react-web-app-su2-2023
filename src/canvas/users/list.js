import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import * as service from "../../users/service";

function UserList() {
  const { search } = useLocation();
  const back = search.split("=")[1];
  const [newUser, setNewUser] = useState({});
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const users = await service.getUsers();
    setUsers(users);
  };

  const navigate = useNavigate();

  const handleCreateNewUser = async () => {
    const actualUser = await service.createUser(newUser);
    navigate(`/canvas/users/${actualUser._id}`);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group mb-2">
        <li className="list-group-item">
          <button
            onClick={handleCreateNewUser}
            className="btn btn-success float-end"
          >
            Create
          </button>
          <input
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
            className="form-control w-75"
            placeholder="New user's username"
          />
        </li>
      </ul>
      <div className="list-group">
        {users.map((user) => (
          <Link
            key={user._id}
            className="list-group-item"
            to={`/canvas/users/${user._id}?back=/canvas/users`}
          >
            <button className="float-end btn btn-warning">Edit</button>
            <div className="pt-2">
              {user.firstName} {user.lastName}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default UserList;
