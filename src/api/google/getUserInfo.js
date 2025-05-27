const endpoint = 'https://www.googleapis.com/oauth2/v3/userinfo';

async function getUserInfo(accessToken) {
  try {
    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    if (res.status === 401) {
      console.warn('Access token expired or invalid');
      // Optionally call refreshToken() here
      // Or trigger re-auth flow
      throw new Error('TokenExpired');
    }

    if (!res.ok) {
      throw new Error('Failed to fetch user info');
    }

    const userInfo = await res.json();
    console.log(userInfo);
    return userInfo;

  } catch (err) {
    console.error(err.message);
    return null;
  }
}

export default getUserInfo;
