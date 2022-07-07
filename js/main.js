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
  element.children[0].addEventListener("click", _ => {

    element.classList.toggle("expanding");
    element.querySelector("svg").classList.toggle("up-down")
    element.children[1].classList.toggle("expanding");
    document.addEventListener("click", (event) => {
      let result = isDescendant(element, event.target);

      if (result == 0) {
        element.classList.remove("expanding");
        element.children[1].classList.remove("expanding");
      }
    });
  });

});




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