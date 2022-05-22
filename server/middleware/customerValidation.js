const { body, validationResult } = require("express-validator");
exports.customerValidate = [
  
    body("customer_name")
      .isLength({
        min: 2
      })
      .withMessage("must be at least 2 charachers")
      .trim()
      .escape(),
 
    body("email")
      .isLength({
        min: 2
      }).isEmail()
      .withMessage("please enter valid email address")
      .trim()
      .escape(),
  
    body("phone")
      .isLength({
        min: 10
      })
      .withMessage("please enter valid mobile number")
      .trim()
      .escape(),
   
   
    (req, res, next) => {
      const errors = validationResult(req);
     
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
      } else {
        next();
      }
    }
  ];