module.exports = function(sequelize, DataTypes) {
  let Watchlist = sequelize.define("Watchlist", {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    imdbId: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    synopsis: {
      type: DataTypes.STRING(500)
    },
    title: {
      type: DataTypes.STRING
    },
    recommend: {
      type: DataTypes.BOOLEAN
    }
  });
  Watchlist.associate = function(models) {
    Watchlist.belongsTo(models.Users, {
      foreignKey: {
      }
    });
  };

  return Watchlist;
};
