const express = require('express');
const massive = require('massive');
const session = require('express-session');
const productController = require('./controller/productController');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: 'kh345KUHbcie13fbwif64viwyf21v'
    })
);

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to da db')
});

app.get('/api/allproductz', productController.getAllProducts);
app.get('/api/product/:id', productController.getOneProducts);
app.post('/api/cart', productController.addToCart)
app.get('/api/cart', productController.getCart)


app.listen(4050, () => console.log('Listening on port 4050'));