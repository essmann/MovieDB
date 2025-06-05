async function RateMovie(movieId, rating){
      const apiBaseUrl = import.meta.env.VITE_API_URL;

const endpoint = `${apiBaseUrl}/movie/rating/${movieId}/${rating}`;
const response = await fetch(endpoint, {
    credentials: "include", // <-- important: send cookies!
    method: "POST", // Use POST method to submit the rating
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to rate movie: ${errorText}`);
  }

  
  return response.json(); // Assuming the backend returns a JSON response



}

export default RateMovie;