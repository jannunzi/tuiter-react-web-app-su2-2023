import { getUsers, createUser, removeUser, updateUser } from "./service";
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("edward");

  const loadUsers = async () => {
    const users = await getUsers();
    setUsers(users);
    // const promise = getUsers();
    // promise.then((data) => {
    //   console.log(data);
    //   setUsers(data);
    // });
  };

  const handleAdd = async () => {
    // alert("add " + username);
    const users = await createUser({
      username: username,
      firsName: username,
      lastName: username,
    });
    setUsers(users);
  };

  const handleRemove = async (userId) => {
    const users = await removeUser(userId);
    setUsers(users);
  };

  const handleRoleUpdate = async (user, newRole) => {
    // alert(newRole);
    const newUser = { ...user, role: newRole };
    const users = await updateUser(newUser);
    setUsers(users);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <h3>Users</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <button onClick={handleAdd} className="float-end btn btn-success">
            Add
          </button>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="form-control w-75"
            placeholder="username"
          />
        </li>
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            <button
              onClick={() => handleRemove(user._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <select
              onChange={(e) => handleRoleUpdate(user, e.target.value)}
              className="form-control w-25 float-end"
              value={user.role}
            >
              <option value="admin">Administrator</option>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
            </select>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
