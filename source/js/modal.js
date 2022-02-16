/**
 * @description модуль управления модальным окном
 */
(function () {
  const modalButtons = document.querySelectorAll('.modal-button');
  const modal = document.querySelector('.modal');
  const modalClose = modal.querySelector('.modal__close');
  modalButtons.forEach((button) => {
    button.addEventListener('click', modalOpen);
  });

  function modalOpen(evt) {
    evt.preventDefault(evt);
    modal.classList.add('modal-open');
  };

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-open');
  })
})();
