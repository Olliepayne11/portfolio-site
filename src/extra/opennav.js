const openNav = () => {
    let navMenu = document.getElementsByClassName("list-container");
    document.getElementById("menu-icon").className = "fa-solid fa-xmark"

    if (navMenu[0].style.display == 'none') {
      navMenu[0].style.display = 'block';
      document.getElementById("menu-icon").className = "fa-solid fa-xmark"
    } else {
      navMenu[0].style.display = 'none';
      document.getElementById("menu-icon").className = "fa-solid fa-bars"
    }
  }

export default openNav;