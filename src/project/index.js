import { Routes, Route } from "react-router";
import Login from "../users/login";
import Profile from "../users/profile";
import Register from "../users/register";
import Details from "./details";
import Home from "./home";
import ProfileOthers from "./profile-others";
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
        <Route path="profile/:userId" element={<ProfileOthers />} />
        <Route path="search" element={<Search />} />
        <Route path="search/:searchTerm" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default Project;
