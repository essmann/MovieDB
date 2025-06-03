async function Logout() {
      const apiBaseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiBaseUrl}/logout`, {
   
     credentials: "include", // ✅ Important: allow browser to store the cookie
    headers: { "Content-Type": "application/json" },
    
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Logout failed: ${errorText}`);
  }

  const data = await response.text(); // or response.json() if backend returns JSON
  return data;
}

export default Logout;
