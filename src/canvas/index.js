import { Routes, Route } from "react-router";
import CourseEditor from "./courses/editor";
import Dashboard from "./dashboard";
import SectionEditor from "./sections/editor";
import CourseList from "./courses/list";
import UserList from "./users/list";
import UserEditor from "./users/edit";
import Navigation from "./navigation";

function Canvas() {
  return (
    <div>
      <h1>Canvas</h1>
      <div className="row">
        <div className="col-2">
          <Navigation />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="courses" element={<CourseList />} />
            <Route path="courses/:courseId" element={<CourseEditor />} />
            <Route
              path="courses/:courseId/sections/:sectionId"
              element={<SectionEditor />}
            />
            <Route path="users" element={<UserList />} />
            <Route path="users/:userId" element={<UserEditor />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
