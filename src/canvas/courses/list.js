import React, { useState, useEffect } from "react";
import * as service from "./service";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "" });

  const loadCourses = async () => {
    const courses = await service.findAllCourses();
    setCourses(courses);
  };

  const handleCreateCourse = async () => {
    const actualCourse = await service.createCourse(newCourse);
    setCourses([...courses, actualCourse]);
    setNewCourse({ title: "" });
  };

  const handleDeleteCourse = async (courseId) => {
    const status = await service.deleteCourse(courseId);
    if (status.deletedCount === 1) {
      setCourses(courses.filter((course) => course._id !== courseId));
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-success float-end"
            onClick={handleCreateCourse}
          >
            Create
          </button>
          <input
            placeholder="Course Title"
            onChange={(e) =>
              setNewCourse({ ...newCourse, title: e.target.value })
            }
            value={newCourse.title}
            className="w-75 form-control"
          />
        </li>

        {courses.map((course) => (
          <li key={course._id} className="list-group-item">
            <button
              onClick={() => handleDeleteCourse(course._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <Link
              className="btn btn-warning float-end me-2"
              to={`/canvas/courses/${course._id}`}
            >
              Edit
            </Link>

            <Link to={`/canvas/courses/${course._id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
