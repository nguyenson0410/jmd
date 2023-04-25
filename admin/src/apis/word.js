import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const searchWordApi = async (query) => {
  try {
    const res = await axios.get(`${URL}/word/search?query=${query}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateWordApi = async (wordId, payload) => {
  try {
    const res = await axios.put(`${URL}/word/update/${wordId}`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addWordApi = async (payload) => {
  try {
    const res = await axios.post(`${URL}/word/create`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteWordApi = async (payload) => {
  try {
    const res = await axios.delete(`${URL}/word/delete/${payload}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
