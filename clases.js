


const fs = require("fs");

//creating class

class ProductsManager {
constructor(){
this.products = []

}

async allProducts(){

let res =  await   fs.promises.readFile('./files/products.json', 'utf-8')

return res


}


    saveProducts(producto) {
        let id = Math.random()
        producto.id = id
        this.products.push(producto)

        //Read File
        //Save Product

        fs.writeFile("./files/products.json", JSON.stringify(this.products, null, 2), "utf-8", (err) => {
            if(err){
                console.log("Error Creating")
            }else{console.log("File Created")
        }
                
            })
            
        }
        
    }

    const pr = new ProductsManager()

    // pr.allProducts().then(res =>{
    //     console.log("Res : " , res)
    // })

    module.exports = ProductsManager



    
    


    // const product = new ProductsManager()
    //     product.saveProducts({
    //         title: "Game of Thrones",
    //         Description: "Storm of Swords" ,
    //         price: 6.8 , 
    //         thumbnail: "./img/game-of-thrones-storm-of-swords.png",
    //         code: 1,
    //         stock: "Books"
    //     })

    


    
//     constructor() {
//     this.products = [];
//     this.productId = 1;
//     this.path = "./files/products.json";
//     }

//     getProducts() {
//     fs.promises
//         .readFile(this.path, "utf-8")
//         .then((data) => {
//         this.products = JSON.parse(data);
//         console.log(this.products);
//         })
//         .catch((err) => `Hubo un error: ${err}`);
//     }

//     addProduct(title, description, price, thumbnail, code, stock) {
        

//     (async () => {
//         if (!title || !description || !price || !thumbnail || !code || !stock) {

            
//         console.log("Todos los campos son obligatorios.");
//         } else {
//         let bandera = true;
//         try {
//             const data = await fs.promises.readFile(this.path, "utf-8");
//             this.products = JSON.parse(data);

//             do {
                

//             if (!this.products.some((prod) => prod.id === this.productId)) {
                
//                 bandera = false;
//                 if (!this.products.some((prod) => prod.code === code)) {
                
//                 const product = {
//                     id: this.productId,
//                     title: title,
//                     description: description,
//                     price: price,
//                     thumbnail: thumbnail,
//                     code: code,
//                     stock: stock,
//                 };
//                 this.products.push(product);

//                 save(this.path, this.products);
//                 } else {
//                 console.log(
//                     `Error: ya existe un producto con el codigo ${code}`
//                 );
//                 }
//             } else {
//                 this.productId += 1;
//             }
//             } while (bandera);
//         } catch (err) {
//             console.log(`Hubo un error: ${err}`);
//         }
//         }
//     })();
//     }
//     getProductById(id) {

        

//     (async () => {
//         try {
//         const data = await fs.promises.readFile(this.path, "utf-8");
//         this.products = JSON.parse(data);
//         const element = this.products.find((e) => e.id === id);
//         if (element) {
//             console.log(element);
//         } else {
//             console.log(`No existe ningun producto con el ID ${id}`);
//         }
//         } catch (err) {
//         console.log(`Hubo un error: ${err}`);
//         }
//     })();
//     }

//     updateProduct(id, title, description, price, thumbnail, code, stock) {
        

//     (async () => {
//         try {
//         const data = await fs.promises.readFile(this.path, "utf-8");
//         this.products = JSON.parse(data);
//         const element = this.products.find((e) => e.id === id);
//         if (element) {
//             this.products.map((item) => {
//             if (item.id === element.id) {
//                 if (
//                 !title ||
//                 !description ||
//                 !price ||
//                 !thumbnail ||
//                 !code ||
//                 !stock
//                 ) {
                
//                 console.log("Todos los campos son obligatorios.");
//                 } else {
//                 item.title = title;
//                 item.description = description;
//                 item.price = price;
//                 item.thumbnail = thumbnail;
//                 item.code = code;
//                 item.stock = stock;

//                 save(this.path, this.products);
//                 }
//             }   
//             });
//         } else {
//             console.log(`No existe ningun producto con el ID ${id}`);
//         }
//         } catch (err) {
//         console.log(`Hubo un error: ${err}`);
//         }
//     })();
//     }

//     deleteProduct(id) {

    

//     (async () => {
//         try {
//         const data = await fs.promises.readFile(this.path, "utf-8");
//         this.products = JSON.parse(data);
//         const element = this.products.find((e) => e.id === id);
//         if (element) {
//             const eIndex = this.products.indexOf(element);
//             this.products.splice(eIndex, 1);

//             fs.promises
//             .writeFile(this.path, JSON.stringify(this.products), "utf-8")
//             .then((res) => {
//                 console.log("Producto ELIMINADO correctamente");
//             })
//             .catch((err) => {
//                 console.log(`Hubo un error: ${err}`);
//             });
//         } else {
//             console.log(`No existe ningun producto con el ID ${id}`);
//         }
//         } catch (err) {
//         console.log(`Hubo un error: ${err}`);
//         }
//     })();
//     }
// }



// const product = new ProductsManager();



// product.addProduct("Game of Thrones", "Storm of Swords", 7.99, "*", 456, 4);
// product.addProduct("Inspiron 3525", "Notebook Gamer", 555, "*", 247, 2);
// product.addProduct("Smart TV", "Lg 55 pulgadas", 400, "*", 789, 5);



// product.addProduct(
//     "Game of Thrones",
//     "A Dance with Dragons",
//     6.99,
//     "*",
//     874,
//     4
// );


// console.log("--------------------");
// console.log(product.getProducts());


// console.log("--------------------");




    


// product.deleteProduct(4);



