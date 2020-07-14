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
      <span class="form__warning form__warning--hide">This is the deault hidden text for the warning.</span>
    </form>
  `
  const formContainer = document.querySelector('.form-container');
  formContainer.appendChild(form);

  const formContent = document.querySelector('.form__content');
  formContent.addEventListener('submit', (e) => {
    validateForm(e);
  });
})


aboutBtn.addEventListener('click', () => {
  const aboutDiv = document.createElement('div');
  aboutDiv.className = 'about';
  aboutDiv.innerHTML = `
      <div class="about__content">
      <span class="about__close">+</span>
        <h1 class="about__heading">About Coffee of The Day</h1>
        <p class="about__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium dolores magni animi aliquam iste officia quasi at repellendus quod?</p>
        <p class="about__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ad eveniet numquam fugiat? Cupiditate, accusantium.</p>
      </div>
  `
const aboutContainer = document.querySelector('.about-container');
aboutContainer.appendChild(aboutDiv);
})

// CLOSE MODAL POP-UP
document.addEventListener('click', e => {
  if (e.target.className.includes('close')) {
    e.target.parentElement.parentElement.remove();
  }
})

// FORM VALIDATION LOGIC
const validateForm = (e) => {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('confPassword').value;
  let errorMessage = [];

  if (!password) {
    errorMessage.push('You must enter a password before submitting.')
  }
  if (password.length < 7) {
    errorMessage.push('Your password must be at least 8 characters long.')
  }
  if (password !== passwordConfirm) {
    errorMessage.push('Your passwords must match, bitch.')
  }
  if (password === 'password' || password === 'Password') {
    errorMessage.push("Your password cannot be 'password'.")
  }
  if (!/\d/.test(password)) {
    errorMessage.push('Your password needs to include a number.')
  }
  if (/\s/.test(password)) {
    errorMessage.push('Your password cannot contain any spaces.')
  }
  if ((password).includes(name)) {
    errorMessage.push('Your name cannot be in your password.')
  }

  if (errorMessage.length > 0) {
    const formWarning = document.querySelector('.form__warning');
    formWarning.classList.replace('form__warning--hide', 'form__warning--show' )
    formWarning.innerText = errorMessage[0];
    e.preventDefault();
  }
}

