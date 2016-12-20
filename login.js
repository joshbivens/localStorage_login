const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const createEmail = document.querySelector('input[name="createEmail"]');
const createPassword = document.querySelector('input[name="createPassword"]');
const confirmPassword = document.querySelector('input[name="confirmPassword"]');
const loginBtn = document.querySelector('#loginBtn');
const loginDiv = document.querySelector('#login');
const createBtn = document.querySelector('#createBtn');
const createDiv = document.querySelector('#create');

// Event Listeners 
createBtn.addEventListener('click', createAccount);

// Create Account Function
function createAccount() {
// Use Object.create and template strings to make resusable user objects
  let user = {
    email: createEmail.value,
    password: createPassword.value
  };

  if(createPassword.value == confirmPassword.value) {
    localStorage.setItem(`user${Date.now()}`, JSON.stringify(user));
    createDiv.style.display = 'none';
  } else {
    alert('Passwords do not match');
  }
}

// Login Function
