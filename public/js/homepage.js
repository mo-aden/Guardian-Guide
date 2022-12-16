const newTaskHandler = async function (event) {
  event.preventDefault();

  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  const response = await fetch(`/api/users/login`, {
    method: "POST",
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const idResponse = await fetch("/api/users", {
    method: "GET",
  });

  const data = await idResponse.json();

  const index = data.findIndex((el) => {
    if (el.email === email.value) return true;
  });

  const id = data[index].id;
  console.log(response);
  if (response.ok) {
    document.location.replace(`/dashboard/${id}`);
  } else {
    alert("Failed to create task");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", newTaskHandler);
