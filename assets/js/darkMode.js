export function darkMode() {
  document.body.querySelector("#darkmode").addEventListener("click", () => {
    document.querySelector("main").classList.toggle("dark-mode");
  });
}
