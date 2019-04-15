const bcrypt = require("bcrypt-nodejs");

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
      },
      password: {
        type: DataTypes.STRING
      }
          
    });

    Users.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
    Users.addHook("beforeCreate", function(users) {
      users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
    });
  
    return Users;
  };