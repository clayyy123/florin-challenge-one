const signUpBtn = document.querySelector('.sign-up-overlay button');
const signIn = document.querySelector('.sign-in-overlay');
signUpBtn.addEventListener('click', () => {
  signIn.classList.add('sign-in-overlay--active');
});
