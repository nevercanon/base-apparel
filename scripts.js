const thankYouMessage = document.querySelector('.thank-you-message');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');
const email = document.querySelector('#email');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');

  form.addEventListener('submit', (e) => {
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value))
  {
    e.preventDefault();
    errorIcon.classList.add('display-block')
    errorMessage.classList.add('display-block')
    thankYouMessage.classList.remove('display-block')
  } else {
    thankYouMessage.classList.add('display-block')
    errorIcon.classList.remove('display-block')
    errorMessage.classList.remove('display-block')
    email.value = ''
     }})


// BORROWED CODE

// form.addEventListener('submit', validate);
// submit.addEventListener('click', validate);

// function validate(e) {
//     e.preventDefault();

//     const emailValue = email.value.trim();

//     if (!isEmail(emailValue)) {
//         errorIcon.classList.add('display-block')
//         errorMessage.classList.add('display-block')
//     } else {
//         thankYouMessage.classList.add('display-block')
//         errorIcon.classList.remove('display-block')
//         errorMessage.classList.remove('display-block')
//     }
// }

// function isEmail(email) {
//    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     return true
//    }
// }