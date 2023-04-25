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

export const updateHistoryApi = async (query) => {
  try {
    axios.get(`${URL}/history/update/${query}`);
  } catch (error) {
    console.log(error);
  }
};
