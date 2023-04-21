import { displayedcart } from "./afficherPlat.js";

export function payer() {
  document.querySelector("#checkout").addEventListener("click", () => {
    displayedcart();
  });
}
