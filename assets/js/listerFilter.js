import { affichageHtml } from "./afficher.js";
import { filterMenu } from "./filtre.js";
import { fullMenu } from "./objetMenu.js";
import { displayedcart } from "./afficherPlat.js";

function cleanHTML() {
  document
    .querySelector("main")
    .querySelectorAll("section")
    .forEach((element) => {
      element.remove();
    });
}

function darkMode() {
  document.body.querySelector("#darkmode").addEventListener("click", () => {
    document.querySelector("main").classList.toggle("dark-mode");
  });
}
const listTri = document.querySelector(".listTri");
for (const iterator of listTri.children) {
  console.log(iterator);
  iterator.setAttribute("class", iterator.innerHTML.valueOf());
}
function payer() {
  document.querySelector("#checkout").addEventListener("click", () => {
    displayedcart();
  });
}

export function listertrier() {
  listTri.addEventListener("click", (e) => {
    switch (e.target.classList[0]) {
      case "menu":
        cleanHTML();
        affichageHtml(fullMenu);
        break;
      case "sushi":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "maki":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "rolls":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "sashimi":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "onigiri":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "ramen":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "boisson":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;
      case "dessert":
        console.log(e.target.classList[0]);
        cleanHTML();
        affichageHtml([filterMenu(fullMenu, e.target.classList[0])]);
        break;

      default:
        break;
    }
  });
  affichageHtml(fullMenu);
  darkMode();
  payer();
}
