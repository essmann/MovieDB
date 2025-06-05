async function GetMovieById(id, includeUserInfo) {
    const apiBaseUrl = import.meta.env.VITE_API_URL;
    console.log("apibaseurl" + apiBaseUrl);
    const fullUrl = includeUserInfo ? `${apiBaseUrl}/movie/${id}?includeUserData=true`:`${apiBaseUrl}/movie/${id}`
  const response = await fetch(fullUrl, {
   
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
