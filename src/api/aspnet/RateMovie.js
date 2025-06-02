async function RateMovie(movieId, rating){
const endpoint = `https://localhost:7233/users/rating/${movieId}/${rating}`;
const response = await fetch(endpoint, {
    credentials: "include", // <-- important: send cookies!
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to rate movie: ${errorText}`);
  }

  const data = await response.json(); // backend returns JSON object
  return data;



}

export default RateMovie;