import { fullMenu } from "./objetMenu.js";

//#region filtre et tri
function filterMenu(listMenu, tags) {
  var monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.classes.forEach((element) => {
        if (tags.includes(element)) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}

function sortMenu(listMenu) {
  var monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      monTableau.push(plat);
    });
  });
  console.log(monTableau.length);
  monTableau.sort(function (a, b) {
    return a.prix - b.prix;
  });
  return monTableau;
}
// console.log(filterMenu(fullMenu, "maki"));
// console.log(sortMenu(fullMenu));
//#endregion

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

console.log(bouton.getAttribute("type"));

const main = document.querySelector("main");

fullMenu.forEach((elem) => {
  elem.forEach((object) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    object.classes.forEach((e) => {
      card.classList.add(e);
    });

    let picture = document.createElement("img");
    picture.classList.add("img");
    picture.src = object.picture;
    card.appendChild(picture);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let name = document.createElement("h2");
    name.classList.add("h2");
    name.textContent = object.name;
    cardBody.appendChild(name);

    let prix = document.createElement("span");
    prix.classList.add("item");
    prix.textContent = "Prix : " + object.prix;
    cardBody.appendChild(prix);

    let classes = document.createElement("span");
    classes.classList.add("item");
    classes.textContent = "Catégories : " + object.classes;
    cardBody.appendChild(classes);

    let ingredients = document.createElement("span");
    ingredients.classList.add("item");
    ingredients.textContent = "ingrédients : " + object.ingredients;
    cardBody.appendChild(ingredients);

    main.appendChild(card);
  });
});
