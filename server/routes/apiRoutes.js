/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:53:13
 * @modify date 2020-10-07 20:56:30
 * @desc [description]
 */
/**
 * required modules/packages
 */
const express= require('express');
const router = express.Router();
const db = require('../models');
const categoryController = require('../controllers/categoryController')
const jobController = require('../controllers/jobController');
const companyController = require('../controllers/companyController')
const { search } = require('./post-routes');
//const registerController = require('../controllers/registerController');
const userValidationPolicy = require('../policies/UserValidationPolicy')
const jwtAuthenticationController = require('../controllers/JWTAuthenticationController');

// Category routes

router.post("/category/create",categoryController.createCategory)
router.get("/allcategory",categoryController.getCategories)


// Jobs routes

router.post('/jobs/create', jobController.createJob);
router.get("/alljobs",jobController.getJobs)
router.get("/jobs/:search",jobController.searchJob);
router.delete("/delete/jobs/:id",jobController.deleteJob);
// Get all categories and the no of jobs in each category
router.get("/alljobcategory",jobController.getJobCategoryCount)

// Company routes
router.post('/company/create', companyController.createCompany);
router.get("/allcompanies",companyController.getCompanies)

// Create seeker user
router.post('/user/create', 
    userValidationPolicy.register,
    jwtAuthenticationController.register);
router.post('/user/login', 
    jwtAuthenticationController.login);
  
// Create employer user
router.post('/employer/create', 
    userValidationPolicy.register,
    jwtAuthenticationController.register);
    
module.exports = router;