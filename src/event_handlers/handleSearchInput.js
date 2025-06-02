import GetMovieBySearch from "../api/aspnet/GetMovieBySearch";
async function handleSearchInput(e, setShowItems) {
  console.log(e.target.value);
  let query = e.target.value;
  if(query == ""){
    setShowItems([]);
    return;
  }
  console.log(`handleSearchInput: sending ${e.target.value} to getMovies`);
  query = query.split(" ").join("+");
  let response;
  try {
    response = await GetMovieBySearch(query);
  } catch {
    return;
  }
  if (!response) {
    return;
  }
  response = JSON.parse(response);
  console.log(response);
  console.log("TYPE OF RESPONSE" + typeof(response));
  setShowItems(response);
}

export default handleSearchInput;