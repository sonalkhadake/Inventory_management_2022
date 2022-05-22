const Customer = require("../models/customer")


//////////addcustomer/////
const addCustomer = async (req,res)=>{
    try {
        const customer = new Customer ({
            customer_name: req.body.customer_name,
            email: req.body.email,
            phone: req.body.phone,
            country:req.body.country,
            state:req.body.state,
            city:req.body.state,
            pin:req.body.pin
            
          });
        
        const newCustomer = await customer.save()
        res.json( newCustomer)
  
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

}

/////////getallcustomer/////

const getAllCustomer = async (req,res)=>{
    try {
        const customer = await Customer.find();
        res.json(customer)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
/////////////update customer/////////

const updateCustomer = async (req,res)=>{
    const {customer_name, email, phone, country, state,city,pin  } = req.body;
    try {
      
        const newCustomer = {};
        if (customer_name) { newCustomer.customer_name = customer_name };
        if (email) { newCustomer.email = email };
        if (phone) { newCustomer.phone = phone};
        if (country) { newCustomer.country = country};
        if (state) { newCustomer.state = state};
        if (city) { newCustomer.country = city};
        if (pin) { newCustomer.country = pin};

       
        let customer = await Customer.findById(req.params._id);
        if (!customer) { return res.status(404).send("Not Found") }
        customer = await Customer.findByIdAndUpdate(req.params._id, { $set: newCustomer  }, { new: true })
        res.json({ customer });
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}

//////////delete customer/////
const deleteCustomer = async (req,res)=>{
    try {
        // Find the customer to be delete and delete it
        const id=req.params.id
        let customer = await Customer.findById(id);
        if (!customer) { return res.status(404).send("Not Found") }
  
         customer = await Customer.findByIdAndDelete(id)
        res.json({ "Success": "customer has been deleted", data: customer});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
///////////get single customer//////
const getCustomer = async (req,res)=>{
   
    try{
       
        let customer = await Customer.findOne({customer_name:req.body.customer_name})
        if (!customer) { return res.status(404).send("Not Found") }
        res.json({message:"customer details", data:customer})

    }
    catch(error){
        console.log(error);
        res.status(500).send("Internal Server Error");
    }

}

module.exports={
    addCustomer,
    getAllCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer

}