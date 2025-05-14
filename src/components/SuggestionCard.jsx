import "../css/Header.css"
function SuggestionCard(props){
    console.log("suggestioncard");
    return(
        <>
        
         <div id="suggestionsContainer" className="">
            <div id="suggestion_poster_container">
                <img src="https://m.media-amazon.com/images/M/MV5BYTAxNTY2NjMtYjk5Yy00Nzg4LTkyMmItYmMzMDM2OWQ1ZGQ3XkEyXkFqcGc@._V1_SX300.jpg" 
                    width={48} height={70}
                />

            </div>
          </div>
        </>
    )
}
export default SuggestionCard;