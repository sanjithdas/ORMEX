/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:59:21
 * @modify date 2020-11-09 10:59:15
 * @desc [Company Controller]
 * https://blog.bitsrc.io/uploading-files-and-images-with-vue-and-express-2018ca0eecd0
 */
// Controller - cateogry request
const db = require("../models");
const company = require("../models/company");

module.exports = {
  // create category
  async createCompany(req, res) {
    console.log(req.body);
    db.Company.create(req.body)
      .then((company) => res.send(company))
      .catch((error) => {
        console.log(error);
      });
  },
  // fetch all categories - retrieve jobs, if they have one.
  async getCompanies(req, res) {
    try {
      await db.Company.findAll({
        include: [db.Job],
      }).then((job) => res.send(job));
    } catch (error) {
      console.log(error);
    }
  },
  // get the user info for the selected company

  async getCompanyUser(req, res) {
    try {
      const company = await db.Company.findAll({
        where: { id: req.params.companyId },
      }).then((user) => res.send(user));
    } catch (error) {
      console.log(error);
    }
    console.log(company);
  },

  async updateLogo(req, res) {
    console.log('in update logo');
    console.log(req.logo);
    try {
      // const company = await db.Company.update(req.body, {
      //   where: { id: req.params.companyId },
      // }).then((company) => res.status(200).send(company));
     // console.log(company);
    } catch (error) {
      console.error(error);
      
      res.status(500).send(error);
    }
  },
};
