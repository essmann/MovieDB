async function GetMovieBySearch(search) {
  const response = await fetch(`https://localhost:7233/movies/search/${search}`, {
   
     credentials: "include" // ✅ Important: allow browser to store the cookie
   
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch movie by Search: ${errorText}`);
  }

  const data = await response.text(); // or response.json() if backend returns JSON
  console.log(data);
  return data;
}

export default GetMovieBySearch;
