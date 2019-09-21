const signUpBtn = document.querySelector('.sign-up-overlay button');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const signUpCont = document.querySelector('.sign-up-container');
const signInBtn = document.querySelector('.sign-in-overlay button');
const overlayCon = document.querySelector('.overlay-container');
const overlay = document.querySelector('.overlay');

signInBtn.addEventListener('click', () => {
  overlay.classList.add('overlay-active');
  overlayCon.classList.add('overlay-container-active');
});

signUpBtn.addEventListener('click', () => {
  overlay.classList.remove('overlay-active');
  overlayCon.classList.remove('overlay-container-active');
});
