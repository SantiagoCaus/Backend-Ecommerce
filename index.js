const express = require('express')
const ProductsManager = require('./clases')

const app = express()
let producto = new ProductsManager

app.get('/', (req, res) =>{
    res.send('Welcome, to my Ecommerce')  
})

app.get("/allProducts", async (req, res) =>{
    let response = await  producto.allProducts()
    res.send(response)

})


app.listen(8080, ()=> {
console.log('Server run on port 8080')
})