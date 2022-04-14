const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const modal = document.querySelector(".modal");
const close1 = document.querySelector(".modal__content--close");

button1.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
button2.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
button3.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});

close1.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});
