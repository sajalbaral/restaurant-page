import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import "./style.css";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const content = document.getElementById("content");

function tabSwitch(tabName) {
  content.innerHTML = "";

  if (tabName === "home") {
    content.appendChild(loadHome());
  }

  if (tabName === "menu") {
    content.appendChild(loadMenu());
  }
}

home.addEventListener("click", () => tabSwitch("home"));
menu.addEventListener("click", () => tabSwitch("menu"));
contact.addEventListener("click", () => tabSwitch("contact"));
