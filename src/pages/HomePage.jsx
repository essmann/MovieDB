import Header from "../components/Header";

function handleClick(props) {
    props.setCounter(prev => prev + 1);
}

function HomePage(props) {
    return (
        <>
            <Header
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
            
        </>
    );
}

export default HomePage;
