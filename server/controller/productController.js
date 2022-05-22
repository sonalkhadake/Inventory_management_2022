const Product = require("../models/product")

////////getallproduct////
const getAllProduct = async (req,res)=>{
    try {
        const product = await Product.find();
        res.json(product)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

/////////create product//////
const addProduct = async (req,res)=>{
    try {
        const {product_name,  description, category,price, quantity, active } = req.body;

       
        const product = new Product({
            product_name, 
             description, 
             category,
             price,  
             quantity,
             active
            
        })
        const addproduct = await product.save()

        res.json(addproduct)

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
//////////////////update product//////
const updateProduct = async (req,res)=>{
    const { product_name, 
        description, 
        category,
        price,  
        quantity,
        active} = req.body;
    try {
        // Create a newNote object
        const newProduct = {};
        if (product_name) { newProduct.product_name = product_name };
        if (description) { newProduct.description = description };
        if (category) { newProduct.category = category };
        if (price) { newProduct.price = price };
        if (quantity) { newProduct.quantity = quantity };
        if (active) { newProduct.active = active };

        // Find the product to be updated and update it
        let product = await Product.findById(req.params._id);
        if (!product) { return res.status(404).send("Not Found") }
        product = await Product.findByIdAndUpdate(req.params._id, { $set: newProduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
////////delete product///////

const deleteProduct = async (req,res)=>{
    try {
        // Find the product to be delete and delete it
        const id=req.params._id
        let product = await Product.findById(id);
        if (!product) { return res.status(404).send("Not Found") }

         product = await Product.findByIdAndDelete(id)
        res.json({ "Success": "product has been deleted", data: product });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
////////get a product details///////
const getProduct = async (req,res)=>{
    try{
       
        let product = await Product.findOne({product_name:req.body.product_name})
        if (!product) { return res.status(404).send("Not Found") }
        res.json({message:"product details", data:product})

    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getAllProduct,
    addProduct,
    updateProduct, 
    deleteProduct,
    getProduct
}