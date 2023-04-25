import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const forgotPasswordApi = async (payload) => {
  try {
    const res = await axios.post(`${URL}/auth/password/forgot/`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const changePasswordApi = async (payload) => {
  try {
    const res = await axios.post(`${URL}/auth/password/change/`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
