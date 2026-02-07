document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const type = params.get("type");

  const item = DATA[type]?.find(i => i.id === id);

  if (!item) {
    console.log("Item not found");
  }

  document.getElementById("name").innerText = item.name;
  document.getElementById("description").innerText = item.description;
  document.getElementById("location").innerText = item.location;
  document.getElementById("image").src = item.image;
  document.getElementById("price").innerText = item.price;
  document.getElementById("unit").innerText = item.unit;

  // Form
  document.getElementById("_hiddenName").value =
  `${type.toUpperCase()} - ${item.name}`;

  // Date validation
  const startDate = document.getElementById("startDate");
  const endDate = document.getElementById("endDate");

  const today = new Date().toISOString().split("T")[0];
  startDate.min = today;

  startDate.addEventListener("change", () => {
    endDate.min = startDate.value;
  });
});