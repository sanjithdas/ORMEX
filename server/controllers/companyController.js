/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:59:21
 * @modify date 2020-11-07 12:23:31
 * @desc [Company Controller]
 */
// Controller - cateogry request
const db = require("../models");
const company = require("../models/company");

module.exports = {
  // create category
  async createCompany(req, res) {
    console.log(req.body);
    // db.Company.create(
    //   req.body
    // ).then( company => res.send(company))
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
};
