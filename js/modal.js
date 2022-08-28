
  let burger = document.querySelector(".burger-button");
  let mainMenu = document.querySelector(".header__menu");

  burger.addEventListener("click", toggleactive);

  function toggleactive() {
    burger.classList.toggle("active");
    mainMenu.classList.toggle("active");
  }

(() => {
    const refs = {
      openModalBtn: document.querySelector(".modal-open"),
      closeModalBtn: document.querySelector(".modal-close"),
      modal: document.querySelector(".modal-overlay"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
