/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:23:02
 * @modify date 2020-11-07 13:23:12
 * @desc [Company model]
 */
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company", {
    user_id: DataTypes.INTEGER,
    cname: DataTypes.STRING,
    slug: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone: DataTypes.STRING,
    websites: DataTypes.STRING,
    logo: DataTypes.STRING,
    cover_photo: DataTypes.STRING,
    slogan: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  Company.associate = (models) => {
    Company.hasMany(models.Job, {
      onDelete: "cascade",
    });
    Company.associate = (models) => {
      Company.hasOne(models.User, {
        onDelete: "cascade",
      });
    };
  };
  return Company;
};
