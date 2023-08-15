import axios from "axios";

const ENROLLMENTS_API = `${process.env.REACT_APP_SERVER_API_URL}/api/enrollments`;
const SECTIONS_API = `${process.env.REACT_APP_SERVER_API_URL}/api/sections`;
const STUDENTS_API = `${process.env.REACT_APP_SERVER_API_URL}/api/students`;

export const findAllEnrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API);
  return response.data;
};

export const findEnrollmentsBySection = async (sectionId) => {
  const response = await axios.get(`${SECTIONS_API}/${sectionId}/enrollments`);
  return response.data;
};

export const findEnrollmentsByStudent = async (studentId) => {
  const response = await axios.get(`${STUDENTS_API}/${studentId}/enrollments`);
  return response.data;
};

export const createEnrollment = async (enrollment) => {
  const response = await axios.post(ENROLLMENTS_API, enrollment);
  return response.data;
};
