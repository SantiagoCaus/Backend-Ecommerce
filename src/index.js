import express from 'express'
import { productManager } from './productManager.js';
import { productsRouter } from './ROUTES/products.router.js';

const  PORT = 8080;

const app = express();

export const productManager = new ProductManager;

app.use(express.json)
app.use('/api/products', productsRouter )//Htttp//localhost:Port/api/products

app.listen(PORT, (req, res)  => {
    console.log(`Listening server un Port ${PORT}`);
}) 