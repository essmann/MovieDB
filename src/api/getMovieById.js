import API_KEY from "./api_key";
import axios from "axios";

async function getMovieById(id) {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
  try {
    const res = await axios.get(url);
    return res.data;  // return the response data so caller can use it
  } catch (err) {
    console.error(err);
    throw err;  // re-throw error so caller can handle it
  }
}

export default getMovieById;
