function test() {
  const div = document.createElement("div");

  div.innerHTML = "test";

  return div;
}

let b;

document.body.appendChild(test() );