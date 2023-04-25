import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const getAllWordsApi = async (page) => {
  try {
    const res = await axios.get(`${URL}/word/all?page=${page}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
