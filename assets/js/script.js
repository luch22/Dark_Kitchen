import { fullMenu } from "./objetMenu.js";
function filter(listMenu, tags) {
  let monTableau = new Array();
  listMenu.forEach((menu) => {
    menu.forEach((plat) => {
      plat.categories.forEach((element) => {
        if (tags.includes(element)) {
          monTableau.push(plat);
        }
      });
    });
  });
  return monTableau;
}

const bouton = document.body.querySelector("#darkmode");
const body = document.querySelector("body");

bouton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

console.log(bouton.getAttribute("type"));

<
const main = document.querySelector("main");

fullMenu.forEach((elem) => {
  elem.forEach((object) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    object.categories.forEach((e) => {
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

    prix.textContent = "Prix : " + object.prix +" €";

    cardBody.appendChild(prix);

    let categories = document.createElement("span");
    categories.classList.add("item");
    categories.textContent = "Catégories : " + object.categories;
    cardBody.appendChild(categories);

    let ingredients = document.createElement("span");
    ingredients.classList.add("item");
    ingredients.textContent = "ingrédients : " + object.ingredients;
    cardBody.appendChild(ingredients);

    let button = document.createElement("button");
    button.classList.add("btnPanier");
    cardBody.appendChild(button);

    main.appendChild(card);
  });

});
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
  
