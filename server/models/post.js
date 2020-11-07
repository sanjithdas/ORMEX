/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:23:54
 * @modify date 2020-11-07 13:24:03
 * @desc [Post Model]
 */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post",{
    text:{
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Post.associate = models => {
    Post.belongsTo(models.User,{
      foreignKey:{
        allowNull: false
      }
    })
  }
  return Post;
}