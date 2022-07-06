// Getting elements from the document

// The nav
const openMenuBtn = document.querySelector("button.open-menu");
const closeMenuBtn = document.querySelector("button.close-menu");
const menu = document.querySelector("nav.menu-container");
const header = document.querySelector("header")
const lists = document.querySelectorAll(".list-container");



openMenuBtn.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  header.style.setProperty("--width", "100%")

  closeMenuBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
    header.style.setProperty("--width", "0");
  })
});


lists.forEach(element => {
  element.addEventListener("click", _ => {

    element.classList.toggle("expanding");
    element.querySelector("svg").classList.toggle("up-down")
    element.children[1].classList.toggle("expanding");

  });

})