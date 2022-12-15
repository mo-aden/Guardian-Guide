// Filter tasks by member
// const memberHandler = async function() {

// }

// document.querySelector("#member-icons").addEventListener("click", memberHandler);

// Filter tasks by date
// Datepicker
$(document).ready(function () {
  $(".datepicker").datepicker();
});

// Logout link
const logoutHandler = async function () {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout-link").addEventListener("click", logoutHandler);
