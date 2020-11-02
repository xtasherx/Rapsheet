// require bcrypt to hash pw 
const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // creates user table columns
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isBand: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    address:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    address2:
      {
        type: DataTypes.STRING,
        allowNull: true
      },
    city:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    state:
      {
        type: DataTypes.STRING,
        allowNull: false
      },
    zip:
      {
        type: DataTypes.STRING,
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
