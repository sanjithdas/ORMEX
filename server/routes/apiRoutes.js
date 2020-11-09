/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:53:13
 * @modify date 2020-11-09 13:23:17
 * @desc [Routes definition]
 */
/**
 * required modules/packages
 */
const express = require("express");
const router = express.Router();
const app = express();
const db = require("../models");
const multer = require("multer");

const fileFilter = (request , file , cb) =>{
    const allowedTypes = ['image/jpeg','image/jpg','image/png'];
    if (!allowedTypes.includes(file.mimetype)){
        const error = new Error("Incorrect file format");
        error.code = "INCORRECT_FILETYPE";
        return cb(error, false);
    }
    
    cd(null,true);
}

const upload = multer({
  dest: "./uploads",
  fileFilter,
  limits:{
      fileSize: 5000000
  }
});

app.use((err, req, res , next) =>{
    if (err.code === "INCORRECT_FILETYPE"){
        res.status(422).json({ error : 'Only images are allowed '})
        return;
    }
})

const categoryController = require("../controllers/categoryController");

const jobController = require("../controllers/jobController");

const companyController = require("../controllers/companyController");

const { search } = require("./post-routes");

const userValidationPolicy = require("../policies/UserValidationPolicy");

const jwtAuthenticationController = require("../controllers/JWTAuthenticationController");
const { request } = require("express");

// Category routes

router.post("/category/create", categoryController.createCategory);
router.get("/allcategory", categoryController.getCategories);

// Jobs routes

router.post("/jobs/create", jobController.createJob);
router.get("/alljobs", jobController.getJobs);
router.get("/jobs/:search", jobController.searchJob);
router.delete("/delete/jobs/:id", jobController.deleteJob);
router.put("/edit/job/:id", jobController.editJob);

// Get all categories and the no of jobs in each category
router.get("/alljobcategory", jobController.getJobCategoryCount);

// Company routes
router.post("/company/create", companyController.createCompany);
router.get("/allcompanies", companyController.getCompanies);
router.put(
  "/company/update/logo/:companyId",
  upload.single("logo"),
  companyController.updateLogo
);

// route for getting company user
router.get("/admin/company/user/:companyId", companyController.getCompanyUser);

// Create seeker user
router.post(
  "/user/create",
  userValidationPolicy.register,
  jwtAuthenticationController.register
);
// login route for admin, employer and seeker
router.post("/user/login", jwtAuthenticationController.login);
router.post("/admin/login", jwtAuthenticationController.adminlogin);

// Create employer user
router.post(
  "/employer/create",
  userValidationPolicy.register,
  jwtAuthenticationController.register
);

module.exports = router;
