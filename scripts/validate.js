function handleFormInput(formElement, submitButton, inactiveButtonClass){
    const hasErrors = !formElement.checkValidity();
    submitButton.disabled = hasErrors;
    submitButton.classList.toggle(
        inactiveButtonClass,
        hasErrors
    );
}

function handleInput(evt, inputErrorClass, errorClassVisible) {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    const isInputValid = input.checkValidity();

    if (isInputValid) {
        input.classList.remove(inputErrorClass);
        error.classList.remove(errorClassVisible);
        error.textContent = '';
    } else {
        input.classList.add(inputErrorClass);
        error.classList.add(errorClassVisible);
        error.textContent = input.validationMessage;
    }
}

function enableValidation(options) {
    const formElements = Array.from(document.querySelectorAll(options.formSelector));
    formElements.forEach((formElement) => {
        const inputElements = Array.from(formElement.querySelectorAll(options.inputSelector));
        const submitButton = formElement.querySelector('.popup__submit-button');
        inputElements.forEach((input) => {
            input.addEventListener('input', (e) => handleInput(e, options.inputErrorClass, options.errorClass));
        });

        formElement.addEventListener('input', () => handleFormInput(formElement, submitButton, options.inactiveButtonClass));
    });
}






