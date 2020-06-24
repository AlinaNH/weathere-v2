// eslint-disable-next-line no-unused-vars
import style from "./style.css";
import background from "./background/background.js";

export default function app() {
  const containerApp = document.createElement("div");

  containerApp.classList.add("container");
  containerApp.innerHTML = background();

  return containerApp;
}

document.body.appendChild(app());