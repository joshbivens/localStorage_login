const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const createEmail = document.querySelector('input[name="createEmail"]');
const createPassword = document.querySelector('input[name="createPassword"]');
const confirmPassword = document.querySelector('input[name="confirmPassword"]');
const loginBtn = document.querySelector('#loginBtn');
const createBtn = document.querySelector('#createBtn');
const createDiv = document.querySelector('#create');

createBtn.addEventListener('click', createAccount);

function createAccount() {
  let user = {
    email: createEmail.value,
    password: createPassword.value
  }

  if(createPassword.value == confirmPassword.value) {
    localStorage.setItem('user', JSON.stringify(user));
    createDiv.style.display = 'none';
  } else {
    alert('Passwords do not match');
  }
}

