import axios from "axios";
const COURSES_API = `${process.env.REACT_APP_SERVER_API_URL}/api/courses`;

export const findAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};

export const findCourseById = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const findCourseByTitle = async (title) => {
  const response = await axios.get(`${COURSES_API}?title=${title}`);
  return response.data;
};

export const createCourse = async (course) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};

export const deleteCourse = async (courseId) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const updateCourse = async (courseId, course) => {
  const response = await axios.put(`${COURSES_API}/${courseId}`, course);
  return response.data;
};
