import "../css/LoginPage.css";

import { useNavigate } from "react-router";
import Header from "../components/Header";

import { GoogleLogin } from "@react-oauth/google";

import { AuthContext } from "../context/AuthContext";
import GoogleButton from "react-google-button";
import { jwtDecode } from "jwt-decode";
import Login from "../api/aspnet/Login";
function LoginPage() {
  const EXPIRES_IN = 3600 * 1000;
  const navigate = useNavigate();
  /*  const loginAuthCode = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(`codeResponse: ${codeResponse}`);
    },
    flow: "auth-code",
    
  }); */

  const handleLoginSuccess = async (credentialResponse) => {
    const jwt = credentialResponse.credential;  // This is the Google JWT (ID token)
    console.log("Google JWT:", jwt);
const user = jwtDecode(jwt);
console.log(user);
    // You can send this JWT to your backend or decode it here

    await Login(jwt);
    
  };


 /*  const {user, setUser, setIsLoggedIn } = useContext(AuthContext);
     console.log(setUser);
  const loginImplicit = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const accessToken = tokenResponse.access_token;

      var userInfo = await getUserInfo(accessToken); // Sends the access token to /userinfo endpoint on Google's servers to get user info.
      const expiresAt = Date.now() + EXPIRES_IN;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("accessTokenExpiresAt", expiresAt.toString());
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);
      setUser(userInfo);
      setIsLoggedIn(true);
      console.log(`THIS IS USER ${JSON.stringify(user, null, 2)}`);
      console.log("Logged in.");
      navigate("/");
    },
  }); */

  return (
    <>
      <Header />
      <div id="loginPageContainer">
        <div id="loginPageContainerloginContainer" className="">
          <h2 className="">Sign in to MovieDB</h2>
          <div id="googleLoginContainer">
            <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
