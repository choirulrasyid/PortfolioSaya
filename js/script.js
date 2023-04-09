const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  navlist.classList.toggle("open");
});
