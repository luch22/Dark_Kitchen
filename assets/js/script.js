import { fullMenu } from "./objetMenu.js";

//#region Function
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

  prix.innerHTML = `<span class="prixArticle ">Prix</span> :  ${plat.prix} €`;
  prix.classList.add("item");
  // prix.textContent = "Prix : " + plat.prix + " €";
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

//#endregion

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");
const main = document.querySelector("main");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// affichageHtml(fullMenu);
// affichageHtml([sortMenu(fullMenu)]);
// affichageHtml([filterMenu(fullMenu, ["poisson", ""])]);

// listerPlat(sortMenu(fullMenu));
/*
// ajout d'un bouton "ajout au panier sur les cards"
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  const addButton = card.querySelector(".btnPanier");

  addButton.addEventListener("click", function() {
  });

});


// Define an object with items
const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];
  
  // Get the cart element from the HTML
  const cart = document.getElementById('cart');
  
  // Initialize the cart state
  let cartItems = [];
  
  // Add an item to the cart
  function addToCart(itemId) {
    const item = items.find(item => item.id === itemId);
    if (item) {
      cartItems.push(item);
      updateCart();
    }
  }
  
  // Remove an item from the cart
  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
  }
  
  // Update the cart interface
  function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const listItem = document.createElement('li');
      listItem.innerHTML = `${item.name} - $${item.price}`;
      const removeButton = document.createElement('button');
      removeButton.innerHTML = 'Remove';
      removeButton.addEventListener('click', () => removeFromCart(i));
      listItem.appendChild(removeButton);
      cartItemsElement.appendChild(listItem);
    }
  }
  
  // Listen for clicks on the Add to Cart buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const itemId = parseInt(button.dataset.itemId);
      addToCart(itemId);
    });
  });
  
  // Listen for clicks on the checkout button
  const checkoutButton = document.getElementById('checkout');
  checkoutButton.addEventListener('click', () => {
    // Implement the checkout process here
  });
  
*/
