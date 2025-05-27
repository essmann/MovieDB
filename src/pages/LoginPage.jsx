import "../css/LoginPage.css";

import { useNavigate } from "react-router";
import Header from "../components/Header";
import { useGoogleLogin } from "@react-oauth/google";
import getUserInfo from "../api/google/getUserInfo";

import GoogleButton from "react-google-button";
function LoginPage() {
  const EXPIRES_IN = 3600 * 1000;
  const navigate = useNavigate();
  /*  const loginAuthCode = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(`codeResponse: ${codeResponse}`);
    },
    flow: "auth-code",
  }); */

  const loginImplicit = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const accessToken = tokenResponse.access_token;

      var userInfo = await getUserInfo(accessToken); // Sends the access token to /userinfo endpoint on Google's servers to get user info.
      const expiresAt = Date.now() + EXPIRES_IN;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("accessTokenExpiresAt", expiresAt.toString());
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log("Logged in.");
      navigate("/");
    },
  });

  return (
    <>
      <Header />
      <div id="loginPageContainer">
        <div id="loginPageContainerloginContainer" className="">
          <h2 className="">Sign in to MovieDB</h2>
          <div id="googleLoginContainer">
            <GoogleButton onClick={() => loginImplicit()}></GoogleButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
