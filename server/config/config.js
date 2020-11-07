/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 12:21:46
 * @modify date 2020-11-07 12:22:10
 * @desc [JWT Secret]
 */
module.exports = {
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
