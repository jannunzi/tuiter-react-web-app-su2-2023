import * as service from "./service";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import StudentEnrollments from "../enrollments/student";
import { Link } from "react-router-dom";

function SectionEditor() {
  const [section, setSection] = useState({});
  const { courseId, sectionId } = useParams();

  const loadSection = async () => {
    const section = await service.findSectionById(sectionId);
    setSection(section);
  };

  const handleUpdateSection = async () => {
    const status = await service.updateSection(sectionId, section);
    console.log(status);
  };

  useEffect(() => {
    loadSection();
  }, []);

  return (
    <div>
      <h2>
        Course: {section.course && section.course.title}
        <Link
          className="btn btn-danger float-end"
          to={`/canvas/courses/${courseId}`}
        >
          &times;
        </Link>
      </h2>
      <h3>Section: {section.title}</h3>
      <hr />
      <div>
        <label htmlFor="title">Section name</label>
        <div>
          <button
            onClick={handleUpdateSection}
            className="btn btn-success float-end"
          >
            Save
          </button>
          <input
            id="title"
            type="text"
            className="form-control w-75"
            onChange={(e) => setSection({ ...section, title: e.target.value })}
            value={section.title}
          />
        </div>
      </div>
      <hr />
      <StudentEnrollments />
    </div>
  );
}

export default SectionEditor;
