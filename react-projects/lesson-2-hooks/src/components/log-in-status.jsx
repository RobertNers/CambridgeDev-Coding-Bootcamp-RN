export function GetLoginStatus({ status }) {
  let displayedStatus = ""
  if (status) {
    displayedStatus = "Logged In"
  } else {
    displayedStatus = "Logged Out"
  };
  return <span>{displayedStatus}</span>
}
