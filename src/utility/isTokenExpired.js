function isTokenExpired(unixTimestampMs) {
  return Date.now() > unixTimestampMs * 1000;
}
export default isTokenExpired;