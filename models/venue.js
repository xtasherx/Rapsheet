module.exports = function(sequelize, DataTypes) {
  const Venue = sequelize.define("Venue", {
      
    venueName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    venueInfo:{
      type: DataTypes.STRING,
      allowNull: true
    },
    profPic1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profPic2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profPic3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subPic2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    venueSize: {
      type: DataTypes.STRING,
      allowNull: true
    },
    rate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  
  Venue.associate = function(models) {
    // We're saying that a venue should belong to a User
    // A Venue can't be created without an User due to the foreign key constraint
    Venue.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Venue;
};