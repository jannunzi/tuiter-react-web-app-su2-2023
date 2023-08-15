import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as service from "./service";
import { Link } from "react-router-dom";

function SectionList() {
  const [sections, setSections] = useState([]); // [1, 2, 3
  const [newSection, setNewSection] = useState({ title: "" });
  const { courseId } = useParams();

  const loadSectionsForCourse = async () => {
    const sections = await service.findSectionsForCourse(courseId);
    setSections(sections);
  };

  const handleCreateSection = async () => {
    const actualSection = await service.createSection(courseId, newSection);
    setSections([...sections, actualSection]);
  };

  const handleDeleteSection = async (sectionId) => {
    const status = await service.deleteSection(sectionId);
    if (status.deletedCount === 1) {
      setSections(sections.filter((section) => section._id !== sectionId));
    }
  };

  useEffect(() => {
    loadSectionsForCourse();
  }, []);

  return (
    <div>
      <h2>Sections</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={handleCreateSection}
            className="btn btn-success float-end"
          >
            Create
          </button>
          <input
            placeholder="Section name"
            onChange={(e) => setNewSection({ title: e.target.value })}
            value={newSection.title}
            className="form-control w-75"
          />
        </li>
        {sections.map((section) => (
          <li key={section._id} className="list-group-item">
            <button
              onClick={() => handleDeleteSection(section._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
            <Link
              className="btn btn-warning float-end me-2"
              to={`/canvas/courses/${courseId}/sections/${section._id}`}
            >
              Edit
            </Link>
            <Link to={`/canvas/courses/${courseId}/sections/${section._id}`}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SectionList;
