module.exports = function(sequelize, DataTypes) {
  let Friends = sequelize.define("Friends", {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    FollowedId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  });
  Friends.associate = function(models) {
    Friends.belongsTo(models.Users, {foreignKey: 'FollowedId', as: 'Followee'});
    Friends.belongsTo(models.Users, {foreignKey: 'UserId', as: 'User'});
  };

  return Friends;
};
