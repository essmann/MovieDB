import "../css/LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import { useGoogleLogin } from "@react-oauth/google";
import getUserInfo from "../api/google/getUserInfo";
function LoginPage() {
  const navigate = useNavigate();
  const loginAuthCode = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(`codeResponse: ${codeResponse}`);
      
    },
    flow: "auth-code",
  });

  const loginImplicit = useGoogleLogin({
  onSuccess: tokenResponse => {
    console.log(tokenResponse);
    const accessToken = tokenResponse.access_token;
      
      getUserInfo(accessToken);
  }
});


  return (
    <>
      <Header />
      <div id="loginPageContainer">
        <div id="loginPageContainerloginContainer" className="">
          <h2 className="">Sign in to MovieDB</h2>
          <div id="googleLoginContainer">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                navigate("/");
              }}
              onError={() => {
                console.log("Login failed");
              }}
            />
          </div>
          <button className="bg-red-300 w-lg" onClick={() => loginAuthCode()}>Authoriation Code</button>
                    <button className="bg-red-300 w-lg" onClick={() => loginImplicit()}>Implicit</button>

        </div>
      </div>
    </>
  );
}

export default LoginPage;
