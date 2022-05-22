const express = require("express")
const router = express.Router()
// const auth = require("../middleware/auth")
const productController = require("../controller/productController")

router.get("/getAllProduct", productController.getAllProduct)
router.post("/addProduct", productController.addProduct)
router.put("/updateProduct/:_id", productController.updateProduct)
router.delete("/deleteProduct/:_id", productController.deleteProduct)
router.get("/getProduct", productController.getProduct )





module.exports = router