const aboutBtn = document.querySelector('#about');
const signUpBtn = document.querySelector('#signup');
const closeBtn = document.querySelector('.form__close');
const submitBtn = document.querySelector('.form__btn')


signUpBtn.addEventListener('click', () => {
  const form = document.createElement('div');
  form.classList.add('form');
  form.innerHTML = `
  <form action="" class="form__content">
  <span class="form__close">+</span>
      <input type="text" name="" id="name" placeholder="Name">
      <input type="email" name="" id="email" placeholder="Email">
      <input type="password" name="" id="password" placeholder="Password">
      <input type="password" name="" id="confPassword" placeholder="Confirm Password">
      <button type="submit" class="form__btn">Submit</button>
      <span class="form__warning"></span>
    </form>
  `
  const formContainer = document.querySelector('.form-container');
  formContainer.appendChild(form);

  const formContent = document.querySelector('.form__content');
  formContent.addEventListener('submit', (e) => {
    validateForm(e);
  });
})

// CLOSE MODAL POP-UP
document.addEventListener('click', e => {
  if (e.target.className == 'form__close') {
    const form = document.querySelector('.form');
    form.remove();
  }
})

// FORM VALIDATION LOGIC
const validateForm = (e) => {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('confPassword').value;

  if (!password) {
    formWarn('You must enter a password.')
  } else if (password.length < 7) {
    formWarn('Your password must be at least 8 characters long.');
  } else if (password !== passwordConfirm) {
    formWarn('Your passwords must match, bitch.');
  } else if (password === 'password' || password === 'Password') {
    formWarn("Your password cannot be 'password'.")
  } else if (!/\d/.test(password)) {
    formWarn('Your password needs to include a number.');
  } else if (/\s/.test(password)) {
    formWarn('Your password cannot contain spaces.');
  } else if ((password).includes(name)) {
    formWarn('Your name cannot be in your password.');
  }
  e.preventDefault();
}

// FORM VALIDATION ERROR WARNING
const formWarn = (message) => {
  const formWarning = document.querySelector('.form__warning');
  formWarning.innerText = message;
  setTimeout(() => {
    formWarning.innerText = '';
  },2000)
}
