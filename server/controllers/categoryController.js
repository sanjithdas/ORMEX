/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:59:21
 * @modify date 2020-11-07 12:23:15
 * @desc [Category Controller]
 */
// Controller - cateogry request
const db = require("../models");

module.exports = {
  // create category
  async createCategory(req, res) {
    console.log(req.body);
    db.Category.create(req.body).then((submittedTodo) =>
      res.send(submittedTodo)
    );
  },
  // fetch all categories - retrieve jobs, if they have one.
  async getCategories(req, res) {
    db.Category.findAll({
      include: [db.Job],
    }).then((todo) => res.send(todo));
  },
  // async getJobCategoryCount(req,res){
  // db.Job.findAll({
  //     attributes: ['Category.*','Job.title',[db.sequelize.fn('COUNT',
  //     'Job.id'), 'JobCount']],
  //      include: [db.Category,db.Company],
  //      group: ['Category.id'],
  //     required: true

  //   }).then(todo => res.send(todo));
  //   //console.log('gggg');
  // }

  // User.findAll({
  //   attributes: ['User.*', 'Post.*', [sequelize.fn('COUNT', 'Post.id'), 'PostCount']],
  //   include: [Post]
  // });
};
