import "./style.css";
import background from "./background/background.js";

function app() {
  const containerApp = document.createElement("div");

  containerApp.classList.add("container");
  containerApp.innerHTML = background();

  return containerApp;
}

document.body.appendChild(app() );