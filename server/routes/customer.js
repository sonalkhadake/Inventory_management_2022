const express = require("express")
const router = express.Router()
const customerController = require("../controller/customerController")
const customerValidate = require("../middleware/customerValidation")

router.get("/getAllCustomer", customerController.getAllCustomer)
router.post("/addCustomer",customerValidate.customerValidate, customerController.addCustomer)
router.put("/updateCustomer/:_id", customerValidate.customerValidate, customerController.updateCustomer)
router.delete("/deleteCustomer/:_id", customerController.deleteCustomer)
router.get("/getCustomer", customerController.getCustomer)



module.exports = router

