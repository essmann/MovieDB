async function getProfile() {
  const response = await fetch("https://localhost:7125/profile", {
    credentials: "include", // <-- important: send cookies!
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to load profile: ${errorText}`);
  }

  const data = await response.json(); // backend returns JSON object
  return data;
}

export default getProfile;
