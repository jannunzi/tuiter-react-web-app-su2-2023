import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as service from "../users/service";

function ProfileOthers() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [followers, setFollowers] = useState([]);

  const fetchUser = async () => {
    const user = await service.getUserById(userId);
    setUser(user);
  };

  const fetchFollowers = async () => {
    const followers = await service.getFollowerUsers(userId);
    setFollowers(followers);
  };

  const followUser = async () => {
    const follow = await service.userFollowsAnotherUser(userId);
  };

  useEffect(() => {
    fetchUser();
    fetchFollowers();
  }, []);

  return (
    <div>
      <h1>
        Someone elses profile
        <button onClick={followUser} className="float-end">
          Follow
        </button>
      </h1>
      <pre>{JSON.stringify(followers, null, 2)}</pre>
    </div>
  );
}

export default ProfileOthers;
