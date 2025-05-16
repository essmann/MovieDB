import API_KEY from "./api_key";
import axios from "axios";

async function getMovie(search) {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&limit=10`;
  try {
    const res = await axios.get(url);
    return res.data;  // return the response data so caller can use it
  } catch (err) {
    console.error(err);
    throw err;  // re-throw error so caller can handle it
  }
}

export default getMovie;
