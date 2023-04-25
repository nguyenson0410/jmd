import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const addCommentApi = async (wordId, payload) => {
  try {
    const res = await axios.post(`${URL}/comment/create/${wordId}`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchCommentApi = async (wordId) => {
  try {
    const res = await axios.get(`${URL}/comment/search/${wordId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
