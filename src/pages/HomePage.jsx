import Header from "../components/Header";

function handleClick(props) {
    props.setCounter(prev => prev + 1);
    console.log("The counter is: "+props.counter);
}

function HomePage(props) {
    return (
        <>
            <Header
                isLoggedIn={props.loggedIn}
                loginHandler={props.setIsLoggedIn}
            />
            <button
                id="login"
                className="bg-amber-300"
                onClick={() => handleClick(props)}
            >
                Test: {props.counter}
            </button>
        </>
    );
}

export default HomePage;
