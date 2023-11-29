function renderArray(title, arr) {
  const props = { idRow: "", title: "" };
  switch (title) {
    case "Input":
      (props.title = "Input: "), (props.idRow = "animals-row");
      break;
    case "Output":
      (props.title = "Output: "), (props.idRow = "fltrAnimals-row");
  }
  const container = document.getElementById("animals-container");
  const list = document.getElementById(props.idRow);
  const row = document.createElement("div");

  row.innerHTML = `<h2 class="text-white display-4 pb-4">${props.title}</h2>`;
  container.insertBefore(row, list);

  arr.forEach((element) => {
    var item = document.createElement("div");
    item.innerHTML = `<div class="col">
        <h3 class="display-4">${element}</h3>
    </div>`;
    list.appendChild(item);
  });
  return list;
}

// Array
const animals = ["🐸", "🐼", "🦊", "🐸", "🐶"];

// Render Input Array
renderArray("Input", animals);

// Filter Method
const filterAnimals = animals.filter((e) => {
  return e !== "🐸";
});

// Render Output Array
renderArray("Output", filterAnimals);
