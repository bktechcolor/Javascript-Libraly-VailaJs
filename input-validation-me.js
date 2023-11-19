class Validation {
  checkMaxLength(maxLength: number, className: string): void {
    const InputElement = document.querySelector(`${className}`) as HTMLInputElement;
    const ErrorElement = document.createElement('div');
    ErrorElement.setAttribute('class', 'error length text-danger m-0');
    if (!InputElement.parentElement?.querySelector('.error.length')) {
      InputElement.parentElement?.appendChild(ErrorElement);
    }
    const InputValueElement = InputElement.parentElement?.querySelector(
      '.error.length',
    ) as HTMLElement;
    if (InputElement.value.length === 0) {
      InputValueElement.innerHTML = `This field cant not be empty`;
    } else if (InputElement.value.length > maxLength && InputElement.value.length > 0) {
      InputValueElement.innerHTML = `This field must be less than ${maxLength} characters`;
    } else {
      InputValueElement.innerHTML = '';
    }
  }
  checkMinLength(strLength: number, className: string): void {
    const InputElement = document.querySelector(`${className}`) as HTMLInputElement;
    const ErrorElement = InputElement.parentElement?.querySelector('.error.length') as HTMLElement;
    if (InputElement.value.length === 0) {
      ErrorElement.innerHTML = `This field cant not be empty`;
    } else if (InputElement.value.length < strLength && InputElement.value.length > 0) {
      ErrorElement.innerHTML = `This field must be less than ${strLength} characters`;
    } else {
      ErrorElement.innerHTML = '';
    }
  }
  // Check Email Match
  checkEmailValid(className: string): void {
    const regGex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    const InputElement = document.querySelector(`${className}`) as HTMLInputElement;
    const ErrorElement = document.createElement('div');
    ErrorElement.setAttribute('class', 'error email text-danger m-0');
    if (!InputElement.parentElement?.querySelector('.error.email')) {
      InputElement.parentElement?.appendChild(ErrorElement);
    }
    const InputValueElement = InputElement.parentElement?.querySelector(
      '.error.email',
    ) as HTMLElement;
    if (!InputElement.value.toLowerCase().match(regGex)) {
      InputValueElement.innerHTML = `This field must be an email format`;
    } else {
      InputValueElement.innerHTML = ``;
    }
  }
  checkSelectOption(className: string): void {
    const InputElement = document.querySelector(`${className}`) as HTMLSelectElement;
    const ErrorElement = document.createElement('div');
    ErrorElement.setAttribute('class', 'error select-option text-danger m-0');
    if (!InputElement.parentElement?.querySelector('.error.select-option')) {
      InputElement.parentElement?.appendChild(ErrorElement);
    }
    const InputValueElement = InputElement.parentElement?.querySelector(
      '.error.select-option',
    ) as HTMLElement;
    console.log(InputValueElement);
    if (!InputElement.value) {
      InputValueElement.innerHTML = `This selection field cant not be empty`;
    } else {
      InputValueElement.innerHTML = '';
    }
  }
  checkFileUpload(className: string): void {
    const InputElement = document.querySelector(`${className}`) as HTMLElement;
    const ErrorElement = document.createElement('div');
    ErrorElement.setAttribute('class', 'error file text-danger m-0');
    if (!InputElement.parentElement?.querySelector('.error.file')) {
      InputElement.parentElement?.appendChild(ErrorElement);
    }
    const InputValueElement = InputElement.parentElement?.querySelector(
      '.error.file',
    ) as HTMLElement;
    if (InputElement.querySelector('input')?.files?.length == 0) {
      InputValueElement.innerHTML = `Must upload at least one file`;
    } else {
      InputValueElement.innerHTML = ``;
    }
  }
}

export default new Validation();
