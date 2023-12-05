import { getNumberOfChars, getLower, getUpper } from "./helpers.js";

const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");

const name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
  answer1.textContent = getNumberOfChars(name.value);
  answer2.textContent = getLower(name.value);
  answer3.textContent = getUpper(name.value);
});
