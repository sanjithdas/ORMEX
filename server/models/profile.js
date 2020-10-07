module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("Profile",{
    // name:{
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
    user_id:        {
                      type: DataTypes.INTEGER,
                      allowNull: false
                    },
    address:        {type: DataTypes.TEXT},
    phone_number:   {type: DataTypes.STRING},
    gender:         {type: DataTypes.STRING},
    dob:            {type: DataTypes.DATE},
    experience:     {type: DataTypes.STRING},
    bio:            {type: DataTypes.STRING},
    cover_letter:   {type: DataTypes.STRING},
    resume:        {type: DataTypes.STRING},
    avatar:        {type: DataTypes.STRING},

  })
  Profile.associate = models => {
    Profile.belongsTo(models.User,{
      foreignKey:{
        allowNull: false
      }
    })
  }
  return Profile;
}