async function GetMovieBySearch(search) {
      const apiBaseUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiBaseUrl}/movie/search/${search}`, {
   
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
