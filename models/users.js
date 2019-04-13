module.exports = function(sequelize, DataTypes) {
    let Users = sequelize.define("Users", {
   
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validation: {
          isEmail: true
        }
          
      }
    });
  
    return Users;
  };