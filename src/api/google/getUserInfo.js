const endpoint = 'https://www.googleapis.com/oauth2/v3/userinfo'

function getUserInfo (accessToken) {
  fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => res.json())
    .then(userInfo => {
      console.log(userInfo)
      // userInfo.sub is the user ID
      // userInfo.email, userInfo.name, userInfo.picture etc are also here
    })
}

export default getUserInfo;