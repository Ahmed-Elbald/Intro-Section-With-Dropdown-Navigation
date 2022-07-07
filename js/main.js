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

document.addEventListener("click", (event) => {

  let clicked = event.target;

  let currentDropdown = Array.from(lists).
    filter(element => element.classList.contains("expanding"));

  if (currentDropdown.length == 1) removeCurrentDropdown()

  if (clicked.matches(".title")) {
    let parent = clicked.closest(".list-container");
    parent.classList.toggle("expanding");
    parent.children[1].classList.toggle("expanding");
  }


  function removeCurrentDropdown() {
    if (isDescendant(currentDropdown[0], clicked) == 0) {
      currentDropdown[0].classList.remove("expanding")
      currentDropdown[0].children[1].classList.toggle("expanding");
    }
  }
})

function isDescendant(parent, element) {

  if (parent.isSameNode(element)) {
    return 1;
  }

  let found = false;
  function isChild(childs) {
    for (let i of childs) {
      if (i.isSameNode(element)) {
        found = true;
        return 2;
      }
      if (i.children) {
        isChild(i.children)
        if (found) {
          return 2;
        }
      }
    }
    return 0;
  }

  return isChild(parent.children);
}