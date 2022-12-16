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

const sendToNewTask = async () => {
  const idResponse = await fetch("/api/users", {
    method: "GET",
  });

  const data = await idResponse.json();

  const index = data.findIndex((el) => {
    if (el.username === usernameEl.value) return true;
  });

  const id = data[index].id;

  if (idResponse.ok) {
    document.location.replace(`/dashboard/${id}/new`);
  } else {
    alert("Failed to sign up");
  }
};

document.querySelector("#create-button").addEventListener("click", newTaskPage);
document.querySelector("#logout-link").addEventListener("click", logoutHandler);
