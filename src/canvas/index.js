import { Routes, Route } from "react-router";
import CourseEditor from "./courses/editor";
import CourseList from "./courses/list";
import SectionEditor from "./sections/editor";

function Canvas() {
  return (
    <div>
      <h1>Canvas</h1>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="courses/:courseId" element={<CourseEditor />} />
        <Route
          path="courses/:courseId/sections/:sectionId"
          element={<SectionEditor />}
        />
      </Routes>
    </div>
  );
}

export default Canvas;
