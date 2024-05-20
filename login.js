const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform authentication logic here
  // For example, you can make an API call to your server to validate the credentials
  // and handle the response accordingly

  // Simulating user data for demonstration purposes
  const users = [
    { email: 'sunil1@gmail.com', password: 'sunil' }
  ];

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    // Redirect to the home page or a dashboard page upon successful login
    window.location.href = 'home.html';
  } else {
    // Display an error message or handle the failed login attempt
    alert('Invalid email or password');
  }
});