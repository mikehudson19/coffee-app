const aboutBtn = document.querySelector('#about');
const signUpBtn = document.querySelector('#signup');
const closeBtn = document.querySelector('.form__close');
const submitBtn = document.querySelector('.form__btn')


signUpBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.classList.add('form');
  div.innerHTML = `
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
  const formDiv = document.querySelector('.form-container');
  formDiv.appendChild(div);

  const formy = document.querySelector('.form__content');
  formy.addEventListener('submit', (e) => {
    validateForm(e);
  });
  
})

document.addEventListener('click', e => {
  if (e.target.className == 'form__close') {
    const form = document.querySelector('.form');
    form.remove();
  }
})


const validateForm = (e) => {
  const name = document.getElementById('name');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('confPassword');

  if (!password.value) {
    formWarn('You must enter a password.')
  } else if (password.value.length < 7) {
    formWarn('Your password must be at least 8 characters long.');
  } else if (password.value !== passwordConfirm.value) {
    formWarn('Your passwords must match, bitch.');
  } else if (password.value === 'password' || password.value === 'Password') {
    formWarn("Your password cannot be 'password'.")
  } else if (!/\d/.test(password.value)) {
    formWarn('Your password needs to include a number.');
  } else if (/\s/.test(password.value)) {
    formWarn('Your password cannot contain spaces.');
  } else if ((password.value).includes(name.value)) {
    formWarn('Your name cannot be in your password.');
  }
  e.preventDefault();
}

const formWarn = (message) => {
  const formWarning = document.querySelector('.form__warning');
  formWarning.innerText = message;
  setTimeout(() => {
    formWarning.innerText = '';
  },2000)
}
