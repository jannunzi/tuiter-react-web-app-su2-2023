import React, { useState, useEffect } from "react";
import { profile, logout, profileThunk, logoutThunk } from "./service";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as service from "../project/service";
import * as userService from "../users/service";
import { Link } from "react-router-dom";

function Profile() {
  const [currentUser, setCurrentUser] = useState({});
  const [likes, setLikes] = useState([]);
  const [followed, setFollowed] = useState([]);

  const fetchFollowed = async (follower) => {
    const followed = await userService.getFollowedUsers(follower);
    setFollowed(followed);
  };
  const fetchLikes = async (userId) => {
    const likes = await service.getLikesForUser(userId);
    setLikes(likes);
  };

  const dispatch = useDispatch();
  const fetchUser = async () => {
    // const user = await profile();
    const { payload } = await dispatch(profileThunk());
    setCurrentUser(payload);
    await fetchLikes(payload._id);
    await fetchFollowed(payload._id);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    // await logout();
    await dispatch(logoutThunk());
    navigate("/project/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(currentUser, null, 2)}</pre>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <h3>People I follow</h3>
      <div className="list-group">
        {followed.map((f) => (
          <Link
            className="list-group-item"
            to={`/project/profile/${f.followed._id}`}
          >
            {f.followed.firstName} {f.followed.lastName}
          </Link>
        ))}
      </div>
      <pre>{JSON.stringify(followed, null, 2)}</pre>
      <hr />
      <h3>Albums I like</h3>
      <div className="list-group">
        {likes.map((like) => (
          <Link
            className="list-group-item"
            to={`/project/details/${like.albumId}`}
          >
            {like.album.name}
          </Link>
        ))}
      </div>
      <pre>{JSON.stringify(likes, null, 2)}</pre>
    </div>
  );
}

export default Profile;
