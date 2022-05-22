
const express= require("express");
const mongoose=require("mongoose");
const PORT= process.env.PORT || 5000
const app = express();

///////userroutes/////
const signUp = require("./routes/user")
const signIn= require("./routes/user")
const getUser =  require("./routes/user")
const verifyMail = require("./routes/user")


//////product routes//////
const getAllProduct = require("./routes/product")
const addProduct = require("./routes/product")
const updateProduct = require("./routes/product")
const deleteProduct = require("./routes/product")


/////////customer route///////
const getAllCustomer = require("./routes/customer")
const addCustomer = require("./routes/customer")
const updateCustomer = require("./routes/customer")
const deleteCustomer = require("./routes/customer")
const getCustomer = require ("./routes/customer")


const cors= require('cors');
const { getProduct } = require("./controller/productController");
const corsOption={
    origin:'http://localhost:5000'
}
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


////////user////
app.use("/api", signUp)////////http://localhost:5000/api/signUp
app.use("/api", signIn)////////http://localhost:5000/api/signIn
app.use("/api", getUser)////////http://localhost:5000/api/getUser
app.use("/api", verifyMail)////////http://localhost:5000/api/verifyMail


////////product/////
app.use("/api", getAllProduct)////////http://localhost:5000/api/getAllProduct
app.use("/api", addProduct)////////http://localhost:5000/api/addProduct
app.use("/api", updateProduct)////////http://localhost:5000/api/updateProduct
app.use("/api", deleteProduct)////////http://localhost:5000/api/deleteProduct
app.use("/api", getProduct)////////http://localhost:5000/api/getProduct
//////customer////
app.use("/api", getAllCustomer)////////http://localhost:5000/api/getAllCustomer
app.use("/api", addCustomer)////////http://localhost:5000/api/addCustomer
app.use("/api", updateCustomer)////////http://localhost:5000/api/updateCustomer
app.use("/api", deleteCustomer)////////http://localhost:5000/api/deleteCustomer
app.use("/api", getCustomer)////////http://localhost:5000/api/getCustomer
/////////database connection
mongoose.connect("mongodb+srv://Finalproject1:KvgDnLWgz9wc5VM2@cluster0.d4i0h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(data=>{
    console.log("your server is connected to the database")
}).catch(err=>{
    console.log("connection is fails")
})

app.listen(PORT,()=>{
    console.log("your server is running at port"+PORT)
})
