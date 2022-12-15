const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username");
  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const idResponse = await fetch("/api/users", {
    method: "GET",
  });

  const data = await idResponse.json();

  const index = data.findIndex((el) => {
    if (el.username === usernameEl.value) return true;
  });

  const id = data[index].id;

  if (response.ok) {
    document.location.replace(`/dashboard/${id}`);
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
