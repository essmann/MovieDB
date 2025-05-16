import "../css/Header.css"
import { Link } from "react-router";

function SuggestionCard(props){
   
    console.log("suggestioncard: "+props);
    console.log(typeof props);
    console.log(props.title);
    if(!props.poster){
        //props.poster
    }
    return(
        <>
        
         <Link id="suggestionsContainer" className="" to={`/title/${props.imdbId}`}>
            <div id="suggestion_poster_container">
                <img src={props.poster} 
                    width={48} height={70}
                />

            </div>
            <div id="movieInfoContainer" className="">
                <div id="title">{props.title}</div>
                <div id="year">{props.year}</div>
            </div>
          </Link>
        </>
    )
}
export default SuggestionCard;