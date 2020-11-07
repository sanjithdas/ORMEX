/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-11-07 13:29:05
 * @modify date 2020-11-07 13:29:50
 * @desc [Server set up]
 */
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
const PORT = process.env.PORT || 8081;
const config = require("./config/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/profile-routes");
app.use("/api/profiles", profileRoutes);

const postRoutes = require("./routes/post-routes");
app.use("/api/posts", postRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on : http://localhost:${PORT}`);
  });
});
