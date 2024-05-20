const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

// Sample data
let products = [
  { id: 1, name: 'Apples', price: 1.99 },
  { id: 2, name: 'Bananas', price: 0.99 },
  { id: 3, name: 'Oranges', price: 2.49 },
  { id: 4, name: 'Grapes', price: 3.99 },
];

let orders = [];

// Products routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.delete('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === productId);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Orders routes
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.post('/api/orders', (req, res) => {
  const newOrder = req.body;
  newOrder.id = orders.length + 1;
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});