let cartItems = [];
export function ajoutPanier() {
  const btnPanier = document.querySelectorAll(".btnPanier");
  btnPanier.forEach((item) => {
    item.addEventListener("click", (e) => {
      cartItems.push(item.parentNode);
    });
  });
  return cartItems;
}
