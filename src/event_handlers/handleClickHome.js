

function handleClickHome(
  event,
  setSuggestionVisible,
  suggestionsRef,
  inputRef
) {
  if (
    suggestionsRef.current &&
    !suggestionsRef.current.contains(event.target) &&
    !inputRef.current.contains(event.target)
  ) {
    setSuggestionVisible(false);
    console.log(
      "You have clicked outside of the input box or suggestions panel!"
    );
  } else if (
    suggestionsRef.current.contains(event.target) ||
    inputRef.current.contains(event.target)
  ) {
    setSuggestionVisible(true);
    console.log("You have clicked the input box!");
  }
}
export default handleClickHome;