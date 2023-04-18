const bouton = document.body.querySelector("#darkmode")
const body = document.querySelector('body');

bouton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

console.log(bouton.getAttribute("type"));
