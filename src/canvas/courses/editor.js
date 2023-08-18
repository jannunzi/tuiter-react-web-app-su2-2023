import React from "react";
import { useParams } from "react-router";
import * as service from "./service";
import { useState, useEffect } from "react";
import SectionList from "../sections/list";
import { Link } from "react-router-dom";

function CourseEditor() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});

  const loadCourse = async () => {
    const actualCourse = await service.findCourseById(courseId);
    setCourse(actualCourse);
  };

  const handleCourseUpdate = async () => {
    const status = await service.updateCourse(courseId, course);
    console.log(status);
  };

  useEffect(() => {
    loadCourse();
  }, []);

  return (
    <div>
      <h2>
        Course: {course.title}
        <Link className="btn btn-danger float-end" to="/canvas">
          Close
        </Link>
      </h2>
      <hr />
      <div>
        <label htmlFor="title">Course title</label>
        <div>
          <button
            onClick={handleCourseUpdate}
            className="btn btn-success float-end"
          >
            Save
          </button>
          <input
            id="title"
            type="text"
            className="form-control w-75"
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            defaultValue={course.title}
          />
        </div>
      </div>
      <hr />
      <SectionList />
    </div>
  );
}

export default CourseEditor;
