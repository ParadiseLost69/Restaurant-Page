"use strict";
import fun from "./home";
import "./style.css";
import Image from "./Coffee.png";

let div = document.createElement("div");
div.textContent = "Hello";
div.className = "hello";
let content = document.querySelector("#content");
content.appendChild(div);
