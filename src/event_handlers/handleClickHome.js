function handleClickHome(event, setSuggestionVisible, suggestionsRef, inputRef) {
  const suggestionIsVisible =
    suggestionsRef.current?.children[0]?.children?.length > 0;
  console.log(suggestionIsVisible);
  console.log(suggestionsRef.current?.children);

  const ratingPopupContainer = document.querySelector("#ratingPopupContainer");
  const rateButton = document.querySelector("#moviePageRateBtnContainer"); // Example ID, adjust as needed

  // Hide the rating popup if click is outside of it
  if (
    !rateButton?.contains(event.target) && ratingPopupContainer &&
    !ratingPopupContainer.contains(event.target)
  ) {
    ratingPopupContainer.style.visibility = "hidden";
  }

  // Handle suggestions visibility toggle
  if (
    suggestionsRef.current &&
    !suggestionsRef.current.contains(event.target) &&
    !inputRef.current.contains(event.target) &&
    suggestionIsVisible
  ) {
    setSuggestionVisible(false);
    console.log("You have clicked outside of the input box or suggestions panel!");
  } else if (
    (suggestionsRef.current?.contains(event.target) ||
      inputRef.current?.contains(event.target)) &&
    !suggestionIsVisible
  ) {
    setSuggestionVisible(true);
    console.log("You have clicked the input box!");
  }

  // other logic...
}

export default handleClickHome;
