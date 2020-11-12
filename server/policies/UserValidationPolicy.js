/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:25:44
 * @modify date 2020-11-12 00:33:51
 * @desc [Joi Validation]
 */
const Joi = require("joi"); // Joi is used to validate user input

module.exports = {
  //Middleware - Joi Validation
  register(req, res, next) {
    //Joi schema
    /**
     * phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
     * email: Joi.string().email().required(),
     *  */

    const schema = Joi.object({
      username: Joi.string().min(3).required(),
      user_type: Joi.string().default("seeker"),
      email: Joi.string().email().required(),
      dob: Joi.date().required(),
      password: Joi.string()
        .min(10)
        .regex(new RegExp("^[A-Za-z ][A-Za-z0-9!@#$%^&* ]*$")),
      cpassword: Joi.string().valid(Joi.ref("password")).required().strict(),
    });
    //Using Joi schema to validate user data
    const { error, value } = schema.validate(req.body);
    //If there is a error
    if (error) {
      //Switch statement checks what error occurred and send back a message to the user about the error
      switch (error.details[0].context.key) {
        case "username":
          res.status(400).send({
            error: "Username required, must be min 3 characters.",
          });
          break;
        case "email":
          res.status(400).send({
            error: "you must provided a valid email address",
          });
          break;
        case "dob":
          res.status(400).send({
            error: "Date of birth required and should be in the date format",
          });
          break;
        case "password":
          res.status(400).send({
            error: `${error}The password failed to match the requirements:
                        <br>
                        1. It must contain ONLY the following characters: lowercase, uppercase, numbers
                        <br>
                        2. Must be between 8 and 32 characters
                        `,
          });
          break;
        case "cpassword":
          res.status(400).send({
            error: "Password and confirm password should match.",
          });
          break;
        default:
          res.status(400).send({
            error: `${error} Invalid registration information`,
          });
      }
    } else {
      next();
    }
  },
};
