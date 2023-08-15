import axios from "axios";

const SECTIONS_API = `${process.env.REACT_APP_SERVER_API_URL}/api/sections`;
const COURSES_API = `${process.env.REACT_APP_SERVER_API_URL}/api/courses`;

export const findAllSections = async () => {
  const response = await axios.get(SECTIONS_API);
  return response.data;
};

export const findSectionById = async (sectionId) => {
  const response = await axios.get(`${SECTIONS_API}/${sectionId}`);
  return response.data;
};

export const findSectionsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/sections`);
  return response.data;
};

export const createSection = async (courseId, section) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/sections`,
    section
  );
  return response.data;
};

export const deleteSection = async (sectionId) => {
  const response = await axios.delete(`${SECTIONS_API}/${sectionId}`);
  return response.data;
};

export const updateSection = async (sectionId, section) => {
  const response = await axios.put(`${SECTIONS_API}/${sectionId}`, section);
  return response.data;
};
