import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const searchUserApi = async (query) => {
  try {
    const res = await axios.get(`${URL}/user/search?username=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserApi = async (userId, payload) => {
  try {
    const res = await axios.put(`${URL}/user/update/${userId}`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserApi = async (payload) => {
  try {
    const res = await axios.delete(`${URL}/user/delete/${payload}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerUserApi = async (payload) => {
  try {
    const res = await axios.post(`${URL}/auth/register`, payload);
  } catch (error) {
    console.log(error);
  }
};
