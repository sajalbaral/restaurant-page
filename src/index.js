import { loadHome } from "./home.js";
import "./style.css";

const content = document.getElementById("content");
content.innerHTML = "";
content.appendChild(loadHome());
