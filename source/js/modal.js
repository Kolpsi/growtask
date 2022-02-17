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
  /**
   * @description Функция открытия модального окна
   * @param {elem} evt - таргет клика
   */
  function modalOpen(evt) {
    evt.preventDefault(evt);
    modal.classList.add('modal-open');
  };

  /**
   * @description Функция закрытия модального окна
   * @param {elem} evt - таргет клика
   */
  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal-open');
  })
})();
