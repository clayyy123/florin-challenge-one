const signUpBtn = document.querySelector('.sign-up-overlay button');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const signUpCont = document.querySelector('.sign-up-container');
signUpBtn.addEventListener('click', () => {
  signIn.classList.remove('sign-in--active');
  signUp.classList.add('sign-up--active');
});
