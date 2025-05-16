import "../css/Header.css"
const targetUrl = window.location.protocol + "//" + window.location.host +"/title/";


function SuggestionCard(props){
   
    console.log("suggestioncard: "+props);
    console.log(typeof props);
    console.log(props.title);
    if(!props.poster){
        //props.poster
    }
    return(
        <>
        
         <a id="suggestionsContainer" className="" href={targetUrl +props.imdbId}>
            <div id="suggestion_poster_container">
                <img src={props.poster} 
                    width={48} height={70}
                />

            </div>
            <div id="movieInfoContainer" className="">
                <div id="title">{props.title}</div>
                <div id="year">{props.year}</div>
            </div>
          </a>
        </>
    )
}
export default SuggestionCard;