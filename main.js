import express from "express";
import fs from "fs";
const port = 3000;
const app = express();
const DATA_PATH = "./products.json";



app.use(express.json());
function getProducts() {
    const products = fs.readFileSync("./products.json", { encoding: "utf-8" });
    const parsedProducts = JSON.parse(products);
    return parsedProducts;
}



app.get("/products", (req, res) => {
  const products = getProducts();
  console.log(products);
  res.send(products);
});

app.get("/products/:id",  (req, res) => {
    const id = parseInt(req.params.id); 
    const products = getProducts();
    

    const product = products.find(p => p.id === id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).send("product not found");
    }
});


app.put("/products/product/:id", (req, res) => {
  const products = getProducts();

  const id = req.params.id;
  const bodyProduct = { ...req.body };

  const foundProductInd = products.findIndex((p) => p.id === +id);
  const updatedProduct = { ...products[foundProductInd], ...bodyProduct };

  products[foundProductInd] = updatedProduct;

  fs.writeFileSync("./products.json", JSON.stringify(products), {
    encoding: "utf-8",
  });
  res.send(products);
});


app.delete("/products/:id",  (req, res) => {
    const id = parseInt(req.params.id); 
    const products = getProducts();

    const product = products.find(p => p.id === id);
    const filteredProducts = products.filter(p => p.id !== id);

    if (product) {
            fs.writeFileSync("./products.json", JSON.stringify(filteredProducts), {
            encoding: "utf-8",
            });        
            res.json(product);
    } else {
        res.status(404).send("product not found");
    }
});

app.post("/products", (req, res) => {
    const products = getProducts();
    const newProduct = {
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        ...req.body
    };
    products.push(newProduct);
    fs.writeFileSync("./products.json", JSON.stringify(products),{encoding: "utf-8",});
    res.status(201).send(newProduct); 
});



// app.get("/todos/id/:id", (req, res) => {
//   res.send(req.params.id);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
