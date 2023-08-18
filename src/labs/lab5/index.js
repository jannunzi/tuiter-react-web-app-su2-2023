import Users from "../../users";
import Register from "../../users/register";
import Login from "../../users/login";
import Profile from "../../users/profile";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Lab5() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <h2>Lab 5</h2>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
      {currentUser ? (
        <Link to="/labs/lab5/profile">Profile</Link>
      ) : (
        <>
          <Link to="/labs/lab5/register">Register</Link> |{" "}
          <Link to="/labs/lab5/login">Login</Link> |
        </>
      )}
      <Link to="/labs/lab5/users">Users</Link>
      <Routes>
        <Route path="/" element={<Navigate to="/labs/lab5/login" />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="users/*" element={<Users />} />
      </Routes>
      {/* <Profile />
      <Login />
      <Register />
      <Users /> */}
    </div>
  );
}

export default Lab5;
