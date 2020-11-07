/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:25:24
 * @modify date 2020-11-07 13:25:31
 * @desc [User Model]
 */
const bcrypt = require("bcrypt");
// bcrypt allows passwords to be hashed and salted

//Hashes passwords
async function hashPassword(user) {
  //If changes have been made to the password in the user model return
  if (!user.changed("password")) {
    return;
  }
  //Generates a slat to add to the password
  try {
    const salt = await bcrypt.genSalt(10);
    //Hashes the password and salt
    const hashPasswordValue = await bcrypt.hash(user.password, salt);
    //Saves the hashed password to the user model
    user.setDataValue("password", hashPasswordValue);
  } catch (error) {
    console.log(error);
  }
}
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_type: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email_verified_at: DataTypes.DATE,
      password: DataTypes.STRING,
      remeber_token: DataTypes.STRING,
    },
    {
      hooks: {
        //beforeCreate: hashPassword,
        //beforeUpdate: hashPassword,
        beforeSave: hashPassword,
      },
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Job, {
      onDelete: "cascade",
    });
    User.hasOne(models.Profile, {
      onDelete: "cascade",
    }),
      (User.prototype.comparePassword = async function (password) {
        try {
          const validPassword = await bcrypt.compare(password, this.password);
          return validPassword;
        } catch (error) {
          console.log("Wrong password");
        }
      });
  };
  return User;
};
