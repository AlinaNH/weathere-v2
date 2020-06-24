import app from "./index.js";

beforeAll(() => {
  const container = document.createElement("div");

  container.classList.add("testContainer");
  container.appendChild(app());
  document.body.appendChild(container);
});

afterAll(() => {
  document.querySelector(".testContainer").remove();
});

test("background rendering", () => {
  expect(document.querySelector(".testContainer").firstChild.children[0].classList[0]).toBe("backgroundContainer");
});