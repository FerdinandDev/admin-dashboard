const loginBtn = document.querySelector('#loginBtn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginScreen = document.querySelector('#loginScreen');
const dashboard = document.querySelector('#dashboard');

loginBtn.addEventListener('click', function() {
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === 'admin' && enteredPassword === 'admin') {
    loginScreen.remove();
    dashboard.style.display = 'block';
    const toast = document.querySelector('#toast');
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 5000);
  
  } else {
    alert('Invalid username or password. Try admin / admin.');
  }
});
const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
});
