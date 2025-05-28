

function handleClickHome(
  event,
  setSuggestionVisible,
  suggestionsRef,
  inputRef
  

) {
 
const suggestionIsVisible = suggestionsRef.current?.children[0].children?.length > 0;  console.log(suggestionIsVisible);
console.log(suggestionsRef.current.children)
 
  if (
    suggestionsRef.current &&
    !suggestionsRef.current.contains(event.target) &&
    !inputRef.current.contains(event.target)
    && suggestionIsVisible
  ) {
    setSuggestionVisible(false);
    console.log(
      "You have clicked outside of the input box or suggestions panel!"
    );
  } else if (
    suggestionsRef.current.contains(event.target) ||
    inputRef.current.contains(event.target)&&
    !suggestionIsVisible
  ) {
    setSuggestionVisible(true);

    console.log("You have clicked the input box!");
  }
}
export default handleClickHome;