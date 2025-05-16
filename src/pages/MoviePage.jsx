import "../css/MoviePage.css"
import "../css/Header.css"
import { useParams } from "react-router";
import Header from "../components/Header";
function MoviePage(){
    let params = useParams(); //gets the search parameters

    return(
        <>
        <Header/>
            <div>
                Hi!
            </div>
            <div>{params.id}</div>
        
        </>
    )
}

export default MoviePage;