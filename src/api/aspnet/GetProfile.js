async function GetProfile() {
      const apiBaseUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiBaseUrl}/profile`, {
    credentials: "include", // <-- important: send cookies!
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to load profile: ${errorText}`);
  }

  const data = await response.json(); // backend returns JSON object
  return data;
}

export default GetProfile;
