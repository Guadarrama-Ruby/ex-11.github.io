let popUp = document.getElementById("cookie-popup");

//When user clicks the accept button
document.getElementById("accept-cookie");
addEventListener("click", () => {
  //Create date object.
  let d = new Date();
  //Increment the current time by one minute (the cookie will expire after one minute).
  d.setMinutes(2 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expires time = 1 minute.
  document.cookie = "myCookieName = thisIsMyCookie";
  expires = d + " ; ";
  //Hide the popup.
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

//Check if cookie is already present.
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup.
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

//Check if cookie exists when page loads.
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};