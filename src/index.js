import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./style.css";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const content = document.getElementById("content");

const tabs = [home, menu, contact];

function tabSwitch(tabName) {
  content.innerHTML = "";

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (tabName === "home") {
    home.classList.add("active");
    content.appendChild(loadHome());
  }

  if (tabName === "menu") {
    menu.classList.add("active");
    content.appendChild(loadMenu());
  }

  if (tabName === "contact") {
    contact.classList.add("active");
    content.appendChild(loadContact());
  }
}

tabSwitch("home");
content.appendChild(loadHome());

home.addEventListener("click", () => tabSwitch("home"));
menu.addEventListener("click", () => tabSwitch("menu"));
contact.addEventListener("click", () => tabSwitch("contact"));
