
//creating class

class ProductsManager {
    constructor(){
        this.products = [];
        // this.id = 0
    }

getProducts() {
    return this.products;
    // console.log(this.products)
}

addProduct(title,description,price, thumbnail,code,stock ){
if (!title || !description || !price || !thumbnail || !code || !stock ) {
    console.log('Todos los campos son obligatorios')
}

if (!this.products.some((p) => p.code === code)){
let newProduct = {title , description , price , thumbnail , code , stock}

this.products.push(newProduct);
console.log(`El producto ${title} fue agregado correctamente :D ` );
} else {
    console.log(`Ya existe un producto con el codigo ${code}`);
}
}
getProductByCode(code){
    let product = this.products.find((p) => code ===code)

    if (product !== undefined){
        return product
    } else{
        console.log(`No existe ningun producto con el codigo ${code}`)
    };
};
};

// class created

const product = new ProductsManager()

//Products

product.addProduct('Game of Thrones' , 'Storm of Swords', 7.99, '*', 456 , 4)
product.addProduct('Inspiron 3525' , 'Notebook Gamer', 555, '*', 247 , 2)
product.addProduct('Smart TV' , 'Lg 55 pulgadas', 400, '*', 789 , 5)

//Verificar valores de Productos
product.addProduct('Game of Thrones' , 'A Dance with Dragons', 6.99, '*', 874 , 4)

//Muestra de todos los productos 
console.log('--------------------')
console.log(product.getProducts());

// Busqueda por codigo de producto
console.log('--------------------')
console.log(product.getProductByCode(874));



