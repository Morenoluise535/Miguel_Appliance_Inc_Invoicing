'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Hooks are automatic methods that run during various phases of the Customer Model lifecycle
    // In this case, before a Customer is created, we will automatically hash their password
    hooks: {
      beforeCreate: function(customer, options) {
        customer.password = bcrypt.hashSync(customer.password, bcrypt.genSaltSync(10), null);
      }
    }
  });
  Customer.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }
  Customer.associate = function(models) {
    // associations can be defined here
    Customer.hasMany(models.Invoice, {
      onDelete: "cascade"
    });
  }
  return Customer;
}