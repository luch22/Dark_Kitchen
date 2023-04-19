import { fullMenu } from "./objetMenu.js";
//#region Function
function affichageHtml(listMenu) {
  listMenu.forEach((menu) => {
    let catmenu = menu[0].categorie[0];
    let sectionParent = document.createElement("section");
    sectionParent.setAttribute("class", catmenu);
    sectionParent.innerHTML = `<h3>${catmenu}</h3>  `;
    menu.forEach((plat) => {
      sectionParent.append(listerPlat(plat));
      main.append(sectionParent);
    });
  });
}

function listerPlat(plat) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  plat.categorie.forEach((e) => {
    card.classList.add(e);
  });

  let picture = document.createElement("img");
  picture.classList.add("img");
  picture.src = plat.picture;
  card.appendChild(picture);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  let name = document.createElement("h2");
  name.classList.add("h2");
  name.textContent = plat.name;
  cardBody.appendChild(name);

  let prix = document.createElement("span");
  prix.classList.add("item");
  prix.textContent = "Prix : " + plat.prix;
  cardBody.appendChild(prix);

  let categorie = document.createElement("span");
  categorie.classList.add("item");
  categorie.textContent = "Catégories : " + plat.categorie;
  cardBody.appendChild(categorie);

  let ingredients = document.createElement("span");
  ingredients.classList.add("item");
  ingredients.textContent = "ingrédients : " + plat.ingredients;
  cardBody.appendChild(ingredients);
  return card;
}
function filterMenu(listMenu, tags) {
  let monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.categorie.forEach((element) => {
        if (tags.includes(element)) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}

function sortMenu(listMenu) {
  let monTableau = new Array();
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
//#endregion

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

fullMenu.forEach((menu) => {
  console.log(menu[0].categorie[0]);
});

console.log(bouton.getAttribute("type"));

const main = document.querySelector("main");
affichageHtml(fullMenu);
