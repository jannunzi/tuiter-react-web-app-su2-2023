import { Routes, Route } from "react-router";
import Login from "../labs/lab5/users/login";
import Profile from "../labs/lab5/users/profile";
import Register from "../labs/lab5/users/register";
import Details from "./details";
import Home from "./home";
import Search from "./search";

const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;

function Project() {
  return (
    <div>
      <h1>Napster</h1>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:searchTerm" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default Project;
