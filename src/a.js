function test() {
  const div = document.createElement("div");

  div.innerHTML = "test";

  return div;
}

let a;

document.body.appendChild(test() );