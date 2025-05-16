
import { useParams } from "react-router";
function MoviePage(){
    let params = useParams(); //gets the search parameters

    return(
        <>
            <div>
                Hi!
            </div>
            <div>{params.id}</div>
        
        </>
    )
}

export default MoviePage;