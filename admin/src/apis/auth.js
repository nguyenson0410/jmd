import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const loginApi = async (payload) => {
  try {
    const res = await axios.post(`${URL}/auth/login/`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
