async function GetMovieById(id) {
  const response = await fetch(`https://localhost:7233/movies/${id}`, {
   
     credentials: "include" // ✅ Important: allow browser to store the cookie
   
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch movie by Id: ${errorText}`);
  }

  const data = await response.text(); // or response.json() if backend returns JSON
  return data;
}

export default GetMovieById;
