import axios from "axios";
const URL = process.env.REACT_APP_API_URL;

export const getWordlistApi = async () => {
  try {
    const res = await axios.get(`${URL}/wordlist`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
