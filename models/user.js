// require bcrypt to hash pw 
const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // creates email column and validates that input is an email 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // creates pw column
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // creates band column 
    isBand: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }

  });
  // check hashed pw vs stored pw 
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  // hashes password 
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
