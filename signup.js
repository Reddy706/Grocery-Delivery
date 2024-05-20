const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Perform sign-up logic here
  // For example, you can make an API call to your server to create a new user account
  // and handle the response accordingly

  // Simulating a successful sign-up for demonstration purposes
  if (name && email && password) {
    // Redirect to the login page or perform any other necessary actions
    window.location.href = 'login.html';
  } else {
    // Display an error message or handle the failed sign-up attempt
    alert('Please fill in all fields');
  }
});