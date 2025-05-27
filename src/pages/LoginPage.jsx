import "../css/LoginPage.css";

import { useNavigate } from "react-router";
import Header from "../components/Header";
import { useGoogleLogin } from "@react-oauth/google";
import getUserInfo from "../api/google/getUserInfo";

import GoogleButton from "react-google-button";
function LoginPage() {
  const navigate = useNavigate();
 /*  const loginAuthCode = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(`codeResponse: ${codeResponse}`);
    },
    flow: "auth-code",
  }); */

  const loginImplicit = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      const accessToken = tokenResponse.access_token;

      getUserInfo(accessToken);
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

          <GoogleButton onClick={() => loginImplicit()}>
            
          </GoogleButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
