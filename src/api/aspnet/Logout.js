async function Logout() {
  const response = await fetch("https://localhost:7233/logout", {
   
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
