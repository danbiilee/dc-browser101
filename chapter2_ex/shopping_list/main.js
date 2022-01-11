const add = document.querySelector(".btn-add");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

function addItem() {
  const item = document.createElement("li");
  item.setAttribute("class", "item");
  item.innerHTML = `
    <p class="title">${input.value}</p>
    <button class="btn-delete">X</button>
  `;

  list.append(item);

  input.value = "";
  input.focus();
}

// Add Item
add.addEventListener("click", addItem);
input.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") {
    return;
  }
  addItem();
});

// Delete Item
list.addEventListener("click", (e) => {
  const delItem = e.target.closest(".item");
  list.removeChild(delItem);
});
