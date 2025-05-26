import "../css/LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
function LoginPage() {
    const navigate = useNavigate();
  return (
    <>
      <div id="loginPageContainer">
        <div id="loginPageContainerloginContainer" className="">
          <h2 className="">Sign in to MovieDB</h2>
          <div id="googleLoginContainer">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                navigate("/");
              }}
              onError={()=>{
                console.log("Login failed");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
