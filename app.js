const aboutBtn = document.querySelector('#about');
const signUpBtn = document.querySelector('#signup');

aboutBtn.addEventListener('click', () => {
  console.log('working');
  const div = document.createElement('div');
  div.classList.add('form');
  div.innerHTML = `
  <form action="" class="form__content">
      <input type="text" name="" id="text" placeholder="Name">
      <input type="email" name="" id="email" placeholder="Email">
      <input type="password" name="" id="password" placeholder="Password">
      <input type="password" name="" id="confPassword" placeholder="Confirm Password">
      <button type="submit" class="form__btn">Submit</button>
    </form>
  `
  const formDiv = document.querySelector('.form-container');
  formDiv.appendChild(div);
})