import sequelize from "./index";
import Sequelize from "sequelize";

const User = sequelize.define("users", {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

module.exports = User;
