const signupFormHandler = async function (event) {
  event.preventDefault();

  const emailEl = document.querySelector("#email");
  const passwordEl = document.querySelector("#password");

  const response = await fetch("/api/user", {
    method: "POST",
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
