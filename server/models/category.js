/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:22:34
 * @modify date 2020-11-07 13:22:55
 * @desc [Category Model]
 */
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Category.associate = (models) => {
    Category.hasMany(models.Job, {
      onDelete: "cascade",
    });
  };
  return Category;
};
