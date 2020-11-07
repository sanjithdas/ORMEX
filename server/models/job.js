/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:23:23
 * @modify date 2020-11-07 13:23:39
 * @desc [Job Model]
 */
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define("Job", {
    title: { type: DataTypes.STRING },
    slug: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    roles: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER },
    last_date: { type: DataTypes.DATE },
    number_of_vacancy: { type: DataTypes.INTEGER },
    experience: { type: DataTypes.INTEGER },
    salary: { type: DataTypes.STRING },
  });
  Job.associate = (models) => {
    Job.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false,
      },
    });
    Job.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false,
      },
    });
    Job.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  //  Job.associate = models => {
  //    Job.belongsTo(models.Company,{
  //     foreignKey:{
  //        allowNull: false
  //      }
  //    })
  //  }
  return Job;
};
