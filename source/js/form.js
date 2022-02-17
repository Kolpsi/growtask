/**
 * @description модуль управления формой
 */
(function () {
  const form = document.querySelector('.form');
  const submit = form.querySelector('.form__button');
  const inputs = form.querySelectorAll('input');
  const errorMessage = 'Ошибка';



  /**
   * @description Добавляем обработчик клика на кнопку отправки формы
   */
  submit.addEventListener('click', function (e) {
    const messages = form.querySelectorAll('.error-message');
    if (messages) {
      messages.forEach(message => form.removeChild(message))
    }

    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      if (input.checkValidity() == false) {

        input.insertAdjacentHTML('afterend', `<p  class="error-message">` + errorMessage + '</p>')
        input.style.border = '1px solid #BC0000';
      } else {
        input.style.border = '1px solid #000000';
      }
    }
  });

})();
