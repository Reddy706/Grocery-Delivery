const checkoutForm = document.getElementById('checkout-form');
const bankDetails = document.getElementById('bank-details');
const paymentOptions = document.querySelectorAll('input[name="payment"]');

// Retrieve orders data from localStorage
const orders = JSON.parse(localStorage.getItem('orders')) || [];

// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

paymentOptions.forEach(option => {
  option.addEventListener('change', toggleBankDetails);
});

function toggleBankDetails() {
  const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
  if (selectedPayment === 'netbanking' || selectedPayment === 'debitcard') {
    bankDetails.style.display = 'block';
  } else {
    bankDetails.style.display = 'none';
  }
}

checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const paymentOption = document.querySelector('input[name="payment"]:checked').value;

  const bankName = document.getElementById('bank-name').value;
  const accountNumber = document.getElementById('account-number').value;

  // Perform further processing or submit the order data to the server
  console.log('Order Details:');
  console.log('Name:', name);
  console.log('Phone:', phone);
  console.log('Email:', email);
  console.log('Address:', address);
  console.log('Pincode:', pincode);
  console.log('Payment Option:', paymentOption);

  if (paymentOption === 'netbanking' || paymentOption === 'debitcard') {
    console.log('Bank Name:', bankName);
    console.log('Account Number:', accountNumber);
  }

  // Create an order object
  const orderDate = new Date();
  const orderItems = cart.map(item => ({ name: item.name, quantity: item.quantity, price: item.price }));
  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const order = {
    date: orderDate.getTime(), // Convert date to timestamp
    totalCost,
    items: orderItems
  };

  // Save the order data
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Display a popup message
  const popup = document.createElement('div');
  popup.id = 'order-popup';
  popup.textContent = 'Order placed successfully!';
  document.body.appendChild(popup);

  // Navigate back to the cart page after 3 seconds
  setTimeout(() => {
    window.location.href = 'cart.html';
  }, 3000);

  // Reset the form
  checkoutForm.reset();
});