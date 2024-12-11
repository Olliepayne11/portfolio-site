const openNav = () => {
  let sideMenu = document.getElementById("menu-icon");
  let navMenu = document.getElementsByClassName("list-container");

  if (sideMenu.className == "fa-solid fa-bars") {
    navMenu[0].style.display = 'block';
    sideMenu.className = "fa-solid fa-xmark";
  } else {
    navMenu[0].style.display = 'none';
    sideMenu.className = "fa-solid fa-bars";
  }

}
export default openNav;