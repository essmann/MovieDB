async function Login(jwt) {
      const apiBaseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: "POST",
     credentials: "include", // ✅ Important: allow browser to store the cookie
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jwt: jwt })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Login failed: ${errorText}`);
  }

  const data = await response.text(); // or response.json() if backend returns JSON
  return data;
}

export default Login;
