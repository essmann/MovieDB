import "../css/Header.css"
function SuggestionCard(props){
   
    console.log("suggestioncard: "+props);
    console.log(typeof props);
    console.log(props.title);
    if(!props.poster){
        props.poster
    }
    return(
        <>
        
         <div id="suggestionsContainer" className="">
            <div id="suggestion_poster_container">
                <img src={props.poster} 
                    width={48} height={70}
                />

            </div>
            <div id="movieInfoContainer" className="">
                <div id="title">{props.title}</div>
                <div id="year">{props.year}</div>
            </div>
          </div>
        </>
    )
}
export default SuggestionCard;