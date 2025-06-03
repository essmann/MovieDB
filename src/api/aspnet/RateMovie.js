async function RateMovie(movieId, rating){
      const apiBaseUrl = import.meta.env.VITE_API_URL;

const endpoint = `${apiBaseUrl}/users/rating/${movieId}/${rating}`;
const response = await fetch(endpoint, {
    credentials: "include", // <-- important: send cookies!
    method: "POST", // Use POST method to submit the rating
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to rate movie: ${errorText}`);
  }

  
  return;



}

export default RateMovie;