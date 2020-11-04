

module.exports = function(sequelize, DataTypes) {
  const Band = sequelize.define("Band", {
    
    bandName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bandBio:{
      type: DataTypes.STRING,
      allowNull: true,
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
    memPic1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    memPic2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    memPic3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    memPic4: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vid1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vid2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bandGenre: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Band.associate = function(models) {
    // We're saying that a Band should belong to a User
    // A Band can't be created without an User due to the foreign key constraint
    Band.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Band;
};
