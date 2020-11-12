/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:56:25
 * @modify date 2020-11-12 11:54:28
 * @desc [Job Controller]
 */
// Controller for Job Request

const { Op } = require("../models");
const db = require("../models");
module.exports = {
  // create new job

  async createJob(req, res) {
    console.log(req.body);
    try {
      await db.Job.create(req.body).then((myjob) =>
        res.send({ myjob: myjob, message: "Jb created successfully" })
      );
    } catch (error) {
      console.log(error);
    }
  }, // fetch all jobs - based on categories & companies
  async getJobs(req, res) {
    await db.Job.findAll({
      include: [db.Category, db.Company],
      left: true,
      // include: [
      //   [db.Category,db.Company],
      //   {required:true}
      // ]
      order: [["id", "desc"]],
    }).then((todo) => res.send(todo));
  },

  async deleteJob(req, res) {
    await db.Job.destroy({
      where: { id: req.params.id },
    }).then((job) =>
      res.status(200).json({ code: 200, message: "Deleted successfully" })
    );

    // res.status(200).json({code: 200, message: 'Post deleted', deletedPost: post})
  },
  async editJob(req, res) {
    console.log(req.params.id);
    console.log(req.body);
    try {
      const job = db.Job.update(req.body, {
        where: { id: req.params.id },
      }).then((job) => res.status(200).send(job));
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async getJobsbyCat(req, res) {
    db.Job.findAndCountAll({
      include: [db.Category, db.Company],
      left: true,
      // include: [
      //   [db.Category,db.Company],
      //   {required:true}
      // ]
    }).then((todo) => res.send(todo));
  },

  async searchJob(req, res) {
    let jobs = null;
    const search = req.params.search;
    jobs = await db.Job.findAll({
      include: [db.Category, db.Company],
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { description: { [Op.like]: `%${search}%` } },
          { roles: { [Op.like]: `%${search}%` } },
          { position: { [Op.like]: `%${search}%` } },
        ],
      },
    }).then((todo) => res.send(todo));
  },

  async getJobCategoryCount(req, res) {
    let jobsx = null;
    jobsx = await db.Job.findAll({
      include: [
        {
          model: db.Category,
          right: true,
        },
      ],
      attributes: [[db.sequelize.fn("COUNT", ["Job.id"]), "JobCount"]],
      group: ["Category.id"],
    }).then((todo) => res.send(todo));
    //console.log(JSON.stringify(jobsx));
  },
};
