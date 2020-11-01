

module.exports = function(sequelize, DataTypes) {
  const Band = sequelize.define("Band", {
    
    bandName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bandBio:{
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaURL: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  //   Band.associate = function(models) {
  //     // We're saying that a Band should belong to a User
  //     // A Band can't be created without an User due to the foreign key constraint
  //     Band.belongsTo(models.User, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };

  return Band;
};
