//Imports
const { User } = require('../models') //Sequelize Model for User
const jwt = require('jsonwebtoken')
const config = require('../config/config');
const Notify = require('app-notify');
const db =require('../models')
const cfg= {};

// Creates a new JWT token
function jwtSignUser(user) {
    const tokenExpiryTime = 60 * 60 * 24 * 7 // One week till the token expirers
    return jwt.sign(user, config.authentication.jwtSecret, { expiresIn: tokenExpiryTime }) // Creates the token and signs it with the app secrete stored in config
}

module.exports = {
    //Routes
    //Register a new user
    async register(req, res) {
        try {
          console.log('i am here');
            const user = await User.create(
              {
                username: req.body.username,
                email: req.body.email,
                user_type: req.body.user_type,
                dob: req.body.dob,
                password: req.body.password,
                cpassword: req.body.cpassword
              
              }) // Creates a new user using the user model
            // Create employer

            const userJSON = user.toJSON() // Converts the user to JSON
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON) // Passes the user data to jwtSignUser to be stored into the token
            });

            // email notification
            //setup smtp server
            cfg.smtp = {
              host: "smtp.gmail.com",
              user: "sanjith.das@gmail.com",
              pass: "Devnadrishya2012@",
              port: "587"
            };

            //setup email headers
            cfg.email = {
              to: 'sanjith.das@gmail.com',
              from: 'sender@example.com'
            };  

            const notify = new Notify(cfg);
 
//send an email
            notify.email.send({
                subject: 'This is a test',
                message: 'Hello world!'
            })
            .then(function(data){
                console.log(data);
            })
            .catch(function(err){
                console.error(err);
            });

        } catch (err) {
            res.status(400).send({
                error: `This email account is already in use`
            });
        }
    },
    async createCompany(req,res) {
      console.log(req.body)
      // db.Company.create(
      //   req.body 
      // ).then( company => res.send(company))
    }
    ,
    async login(req, res) {
        try {
            const { email, password } = req.body //Collect the user input
            //Finds the matching email in the database
            const user = await User.findOne({
               where: {
                    email: email
                },
                include: [db.Job],
            })
            //If no matching user in the database
            if (!user) {
                return res.status(401).send({
                    error: 'The login information was incorrect'
                })
            }

            //If the password does not match
            const isPasswordValid = await user.comparePassword(password) //compares the password with the hashed password in the database
            console.log("Password");
            console.log(isPasswordValid);
            if (!isPasswordValid) {
                //
                return res.status(401).send({
                    error: 'The login information was incorrect'
                })
            }

            //If the login details are correct sends back a token
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON) // Passes the user data to jwtSignUser to be stored into the token
            });

        } catch (err) {
            console.log(err);
            res.status(500).send({
                error: 'A errors has occurred well trying to login'
            });
        }
    }
//getInstructionGuideById


}