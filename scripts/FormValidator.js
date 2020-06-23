export class FormValidator {
    constructor(formSelectors, formElement) {
        this._formSelectors = formSelectors,
        this._formElement = formElement
    }

    handleFormInput() {
        const hasErrors = !this._formElement.checkValidity();
        const submitButton = this._formElement.querySelector(this._formSelectors.submitButtonSelector);
        submitButton.disabled = hasErrors;
        submitButton.classList.toggle(this._formSelectors.inactiveButtonClass, hasErrors);
    }

    _handleInput(evt) {
        const input = evt.target;
        const error = this._formElement.querySelector(`#${input.id}-error`);
        const isInputValid = input.checkValidity();

        if (isInputValid) {
            input.classList.remove(this._formSelectors.inputErrorClass);
            error.classList.remove(this._formSelectors.errorClass);
            error.textContent = '';
        } else {
            input.classList.add(this._formSelectors.inputErrorClass);
            error.classList.add(this._formSelectors.errorClass);
            error.textContent = input.validationMessage;
        }
    }

    _setEventListeners() {
        const inputElements = Array.from(this._formElement.querySelectorAll(this._formSelectors.inputSelector));
        inputElements.forEach((input) => {
            input.addEventListener('input', (evt) => { this._handleInput(evt) })
            });
        this._formElement.addEventListener('input', () => { this.handleFormInput() });
    }

    enableValidation() {
        this._setEventListeners();
    }
}



