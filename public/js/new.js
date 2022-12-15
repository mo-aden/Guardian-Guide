const newTaskHandler = async function (event) {
  event.preventDefault();

  const name = document.querySelector("#name");
  const category = document.querySelector("#category");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  const familyId = document.querySelector("#family-id");

  await fetch(`/api/task`, {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      category: category.value,
      description: description.value,
      due_date: date.value,
      family_id: familyId.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create task");
  }
};

document
  .querySelector("#new-task-form")
  .addEventListener("submit", newTaskHandler);

$(document).ready(function () {
  $("select").formSelect();
});

// Date picker
$(document).ready(function () {
  $(".datepicker").datepicker();
});
