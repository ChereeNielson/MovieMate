module.exports = function(sequelize, DataTypes) {
  let Watchlist = sequelize.define("Watchlist", {
    imdbId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
