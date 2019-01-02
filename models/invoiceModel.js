module.exports = function(sequelize, DataTypes) {
    
    var Invoice = sequelize.define('Invoice', {
    
        invoice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[100]
            }
        },

        apt: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [7]
            }
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [30]
            }
        },
        
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },

        service: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [30]
            }
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [500]
            }
        },

        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }
        },

        labor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [10]
            }
        },

        // The password cannot be null
        jobDate: {
            type: DataTypes.DATE,
            allowNull: false
        },


        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },

        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }    
    });

    Invoice.associate = function (models) {
        Invoice.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Invoice;
}