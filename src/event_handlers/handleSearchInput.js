import getMovies from "../api/getMovies";
async function handleSearchInput(e, setShowItems) {
  console.log(e.target.value);
  let query = e.target.value;
  console.log(`handleSearchInput: sending ${e.target.value} to getMovies`);
  query = query.split(" ").join("+");
  let response;
  try {
    response = await getMovies(query);
  } catch {
    return;
  }
  if (!response) {
    return;
  }
  console.log(response["Search"]);
  setShowItems(response["Search"]);
}

export default handleSearchInput;