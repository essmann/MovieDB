async function GetRatedMovies() {
      const apiBaseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiBaseUrl}/movie/ratings`, {
   
     credentials: "include" // ✅ Important: allow browser to store the cookie
   
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch your movie ratings: ${errorText}`);
  }

  const data = await response.json(); // or response.json() if backend returns JSON
  console.log(data);
  return data;
}

export default GetRatedMovies;
