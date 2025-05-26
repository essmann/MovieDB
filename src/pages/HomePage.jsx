import Header from "../components/Header";
import { GoogleLogin } from "@react-oauth/google";
function handleClick(props) {
    props.setCounter(prev => prev + 1);
}

function HomePage(props) {
    return (
        <>
            <Header
                isLoggedIn={props.isLoggedIn}
                setIsLoggedIn={props.setIsLoggedIn}
            />
            <button
                id="count"
                className="bg-amber-300"
                onClick={() => handleClick(props)}
            >
                Test: {props.counter}
            </button>
            <button 
                id="login" 
                className="bg-amber-200" 
                onClick={() => props.setIsLoggedIn(prev => !prev)} // Toggle isLoggedIn
            >
                Signed in: {props.isLoggedIn? "Yes" : "No"}
            </button>
            <GoogleLogin/>
        </>
    );
}

export default HomePage;
