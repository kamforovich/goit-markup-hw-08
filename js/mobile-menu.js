
  let burger = document.querySelector(".burger-button");
  let mainMenu = document.querySelector(".header__menu");

  burger.addEventListener("click", toggleactive);

  function toggleactive() {
    burger.classList.toggle("active");
    mainMenu.classList.toggle("active");
  }

