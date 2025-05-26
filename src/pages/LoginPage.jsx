import "../css/LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
function LoginPage() {
    return (  
        <>
            <div id="loginPageContainer">
                <div id="loginContainer" className="">
                    <h2 className="">
                        Sign in to MovieDB
                    </h2>
                    <div id="googleLoginContainer">
                        <GoogleLogin/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
