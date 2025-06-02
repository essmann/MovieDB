async function GetMovieById(id) {
    const apiBaseUrl = import.meta.env.VITE_API_URL;
    console.log("apibaseurl" + apiBaseUrl);
  const response = await fetch(`${apiBaseUrl}/movies/${id}`, {
   
     credentials: "include" // ✅ Important: allow browser to store the cookie
   
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch movie by Id: ${errorText}`);
  }

  const data = await response.json();
  return data;
}

export default GetMovieById;
