import * as studentService from "../../labs/lab5/users/service";
import * as enrollmentService from "./service";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudentEnrollments() {
  const { sectionId } = useParams();

  const [selectedStudent, setSelectedStudent] = useState("");
  const [students, setStudents] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  const loadStudents = async () => {
    const students = await studentService.getUsers();
    setStudents(students);
  };

  const handleEnroll = async () => {
    const enrollment = {
      student: selectedStudent,
      section: sectionId,
    };
    await enrollmentService.createEnrollment(enrollment);
    loadEnrollments();
  };

  const loadEnrollments = async () => {
    const enrollments = await enrollmentService.findEnrollmentsBySection(
      sectionId
    );
    setEnrollments(enrollments);
  };

  useEffect(() => {
    loadStudents();
    loadEnrollments();
  }, []);

  return (
    <div>
      <h3>Students</h3>
      <button onClick={handleEnroll} className="btn btn-success float-end">
        Enroll
      </button>
      <select
        onChange={(e) => setSelectedStudent(e.target.value)}
        className="form-control w-75"
      >
        {students.map((student) => (
          <option key={student._id} value={student._id}>
            {student.username}
          </option>
        ))}
      </select>
      <ul className="list-group">
        {enrollments.map((enrollment) => (
          <li key={enrollment._id} className="list-group-item">
            {enrollment.student.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentEnrollments;
