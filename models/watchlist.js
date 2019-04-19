module.exports = function(sequelize, DataTypes) {
  let Watchlist = sequelize.define("Watchlist", {
    imdbId: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.INTEGER
    },
    synopsis: {
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.INTEGER
    },
    recomend: {
      type: DataTypes.BOOLEAN
    }
  });
  Watchlist.associate = function(models) {
    Watchlist.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Watchlist;
};
