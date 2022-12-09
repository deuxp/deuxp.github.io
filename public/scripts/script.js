import { setStyles } from "./helpers.js";

window.onload = () => {
  const name = document.querySelector(".name");
  const title = document.querySelector(".job-title");

  let red = false;

  name.addEventListener("mouseout", _ => {
    setStyles(name, { color: "black" });
  });
  name.addEventListener("mouseover", _ => {
    setStyles(name, { color: "red" });
  });
};
