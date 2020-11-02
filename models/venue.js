module.exports = function(sequelize, DataTypes) {
  const Venue = sequelize.define("Venue", {
      
    venueName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    venueInfo:{
      type: DataTypes.STRING,
      allowNull: false
    },
    mediaURL: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    venueSize: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });
  
  //   Venue.associate = function(models) {
  //     // We're saying that a vand should belong to a User
  //     // A Venue can't be created without an User due to the foreign key constraint
  //     Venue.belongsTo(models.User, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };
  
  return Venue;
};