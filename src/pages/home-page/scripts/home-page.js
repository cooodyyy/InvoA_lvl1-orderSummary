/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const buttonProceed = document.querySelector(".button");
const buttonCancel = document.querySelector(".link--cancel");

buttonProceed.addEventListener("click", () => {
  buttonProceed.classList.add("button--loading");
});

buttonCancel.addEventListener("click", () => {
  buttonProceed.classList.remove("button--loading");
});
