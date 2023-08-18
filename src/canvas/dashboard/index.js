import React, { useState, useEffect } from "react";
import * as service from "../courses/service";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const courses = await service.findAllCourses();
    setCourses(courses);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div>
      <h2>
        Dashboard
        <Link className="btn btn-warning float-end" to={`/canvas/courses`}>
          Edit
        </Link>
      </h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-2 border rounded">
            <Link to={`/canvas/courses/${course._id}`}>{course.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
