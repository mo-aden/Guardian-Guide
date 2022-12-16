// Navbar
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// Filter tasks by date
// Datepicker
$(document).ready(function () {
  $(".datepicker").datepicker({
    format: "yyyy-mm-dd",
  });
});

// Logout link
const logoutHandler = async function (event) {
  event.preventDefault();

  // const response = await fetch("/api/users/logout", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  // });

  // if (response.ok) {
  document.location.replace("../");
  // } else {
  //   alert("Failed to log out");
  // }
};

document.querySelector("#logout-link").addEventListener("click", logoutHandler);
