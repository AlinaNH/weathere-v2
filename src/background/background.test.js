import background from "./background.js";

beforeAll(() => {
  const container = document.createElement("div");

  container.classList.add("testContainer");
  container.insertAdjacentHTML("afterbegin", background());
  document.body.appendChild(container);
});

afterAll(() => {
  document.querySelector(".testContainer").remove();
});

test("background was appended to test container", () => {
  expect(document.querySelector(".testContainer").children[0].classList[0]).toBe("backgroundContainer");
});

test("background container has five cloud containers", () => {
  expect(document.querySelector(".backgroundContainer").children.length).toBe(5);
});

test("five cloud containers has their own style classes", () => {
  expect([...document.querySelector(".backgroundContainer").children].map((element) => element.classList[0])).toStrictEqual([
    "cloudContainer1",
    "cloudContainer2",
    "cloudContainer3",
    "cloudContainer4",
    "cloudContainer5"
  ]);
});

test("every cloud container has one div child element", () => {
  expect([...document.querySelector(".backgroundContainer").children].map((element) => element.children[0].tagName)).toStrictEqual([
    "DIV",
    "DIV",
    "DIV",
    "DIV",
    "DIV"
  ]);
});

test("every child div element has class cloud", () => {
  expect([...document.querySelector(".backgroundContainer").children].map((element) => element.children[0].classList[0])).toStrictEqual([
    "cloud",
    "cloud",
    "cloud",
    "cloud",
    "cloud"
  ]);
});