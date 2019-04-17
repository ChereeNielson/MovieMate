module.exports = function(sequelize, DataTypes) {
  let Friends = sequelize.define("Friends", {
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    followedId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
  Friends.associate = function(models) {
    Friends.belongsTo(models.Users, {
      foreignKey: "followedId",
      as: "followee"
    });
    Friends.belongsTo(models.Users, {
      foreignKey: "userId",
      as: "user"
    });
  };

  return Friends;
};
