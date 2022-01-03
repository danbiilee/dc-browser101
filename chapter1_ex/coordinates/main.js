const app = document.querySelector("#app");
const target = document.querySelector(".target");
const hline = document.querySelector(".h-line");
const vline = document.querySelector(".v-line");
const coord = document.querySelector(".coord");

function init() {
  vline.style.left = `${parseInt(target.width / 2)}px`;
  hline.style.top = `${parseInt(target.height / 2)}px`;

  coord.innerHTML = `${0}px, ${0}px`;
  coord.style.left = target.width + "px";
  coord.style.top = target.height + "px";
}

app.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  target.style.left = `${clientX}px`;
  target.style.top = `${clientY}px`;

  vline.style.left = `${clientX + parseInt(target.width / 2)}px`;
  hline.style.top = `${clientY + parseInt(target.height / 2)}px`;

  coord.innerHTML = `${clientX}px, ${clientY}px`;
  coord.style.left = clientX + target.width + "px";
  coord.style.top = clientY + target.height + "px";
});

init();
