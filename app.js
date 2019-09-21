const signUpBtn = document.querySelector('.sign-up-overlay button');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const signUpCont = document.querySelector('.sign-up-container');
const signInCont = document.querySelector('.sign-in-container');
const signInBtn = document.querySelector('.sign-in-overlay button');
const overlayCon = document.querySelector('.overlay-container');
const overlay = document.querySelector('.overlay');

signInBtn.addEventListener('click', () => {
  overlay.classList.add('overlay-active');
  overlayCon.classList.add('overlay-container-active');
  signUpCont.classList.add('sign-up-container-active');
  signInCont.classList.remove('sign-in-container-active');
});

signUpBtn.addEventListener('click', () => {
  overlay.classList.remove('overlay-active');
  overlayCon.classList.remove('overlay-container-active');
  signUpCont.classList.remove('sign-up-container-active');
  signInCont.classList.add('sign-in-container-active');
});
