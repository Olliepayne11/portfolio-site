const openNav = () => {
    let navMenu = document.getElementsByClassName("list-container");

    if (navMenu[0].style.display == 'none') {
      navMenu[0].style.display = 'block';
    } else {
      navMenu[0].style.display = 'none';
    }
  }

export default openNav;