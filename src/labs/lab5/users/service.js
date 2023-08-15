import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
  withCredentials: true,
});

const USERS_API = `${process.env.REACT_APP_SERVER_API_URL}/users`;

export const registerThunk = createAsyncThunk(
  "user/register",
  async (user) => await register(user)
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (user) => await login(user)
);

export const profileThunk = createAsyncThunk(
  "user/profile",
  async (user) => await profile(user)
);

export const logoutThunk = createAsyncThunk(
  "user/logout",
  async (user) => await logout(user)
);

export const register = async (user) => {
  const response = await api.post(`${USERS_API}/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await api.post(`${USERS_API}/login`, user);
  return response.data;
};

export const profile = async (user) => {
  const response = await api.post(`${USERS_API}/profile`);
  return response.data;
};

export const logout = async (user) => {
  const response = await api.post(`${USERS_API}/logout`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_API, user);
  return response.data;
};

export const removeUser = async (userId) => {
  const response = await axios.delete(`${USERS_API}/${userId}`);
  return response.data;
};

export const updateUser = async (newUser) => {
  const response = await axios.put(`${USERS_API}/${newUser._id}`, newUser);
  return response.data;
};

export const getUsersWithRole = async (role) => {
  const response = await axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;

  //   const promise = axios.get(USERS_API);
  //   return promise.then((response) => {
  //     return response.data;
  //   });
};
export const getUserById = () => {};
