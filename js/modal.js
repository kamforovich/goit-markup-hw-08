
  let burger = document.querySelector(".burger-button");
  let mainMenu = document.querySelector(".header__menu");

  burger.addEventListener("click", toggleactive);

  function toggleactive() {
    burger.classList.toggle("active");
    mainMenu.classList.toggle("active");
  }

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
