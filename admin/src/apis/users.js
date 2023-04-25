import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const getAllUsersApi = async (page) => {
  try {
    const res = await axios.get(`${URL}/user/all?page=${page}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
