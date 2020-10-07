/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-09-23 15:56:25
 * @modify date 2020-10-07 17:32:04
 * @desc [description]
 */
// Controller for User

const {Op} = require('../models');
const db =require('../models')
module.exports = {
// create new job
  async createUser (req,res) {
    console.log(req.body);
    db.User.create(
      req.body
    ).then( user => res.send(user))
  }
,// fetch all jobs - based on categories & companies
  // async getJobs(req,res){
  //   db.Job.findAll({
  //     include: [db.Category,db.Company], 
  //     left:true
  //     // include: [
  //     //   [db.Category,db.Company],
  //     //   {required:true}
  //     // ]
  //   }).then(todo => res.send(todo));
  // },

  // async getJobsbyCat(req,res){
  //   db.Job.findAndCountAll({
  //     include: [db.Category,db.Company], 
  //     left:true
  //     // include: [
  //     //   [db.Category,db.Company],
  //     //   {required:true}
  //     // ]
  //   }).then(todo => res.send(todo));
  // },
  
  // async searchJob(req,res){
  //   let jobs = null;
  //    const search = req.params.search;
  //    jobs = await db.Job.findAll({
  //     include: [db.Category,db.Company],
  //       where: {[Op.or]: [{ 'title': {[Op.like]: `%${search}%` } }, { 'description': {[Op.like]: `%${search}%` } }, { 'roles': {[Op.like]: `%${search}%` } }, { 'position': {[Op.like]: `%${search}%` } }]}
  //   }).then(todo => res.send(todo));
   
  // },

  // async getJobCategoryCount(req,res){
  //   let jobsx = null;
  //   jobsx= await db.Job.findAll({
  //       include:[{
  //          model: db.Category,
  //          right:true, 
  //         }],
  //        attributes: [[db.sequelize.fn('COUNT',
  //        ['Job.id']), 'JobCount']],
  //        group: ['Category.id']
         
  //     }).then(todo => res.send(todo));
  //     //console.log(JSON.stringify(jobsx));
  //   }
  
}