import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";
import Editor from "../../components/Editor";
import * as service from "../../users/service";

function UserEditor() {
  const { userId } = useParams();
  const { search } = useLocation();
  const back = search.split("=")[1];
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const user = await service.getUserById(userId);
    setUser(user);
  };
  const navigate = useNavigate();
  const saveUser = async () => {
    await service.updateUser(user);
    navigate(back);
  };

  const handleDeleteUser = async () => {
    await service.removeUser(userId);
    navigate(back);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const form = {
    username: {},
    password: {
      widget: "password",
    },
    firstName: {
      label: "First Name",
    },
    lastName: {
      label: "Last Name",
    },
    role: {
      widget: "select",
      options: ["student", "faculty"],
    },
    dateOfHire: {
      label: "Date of Hire",
      widget: "date",
    },
  };

  return (
    <div>
      <h2>
        User Editor
        <button onClick={saveUser} className="btn btn-success float-end">
          Save
        </button>
        <Link to={back} className="btn btn-warning float-end me-2">
          Cancel
        </Link>
      </h2>
      <hr />

      <Editor obj={user} form={form} setObj={setUser} />
      <hr />
      <button onClick={handleDeleteUser} className="btn btn-danger float-end">
        Delete
      </button>
      {search}
    </div>
  );
}

export default UserEditor;
