module.exports = function(sequelize, DataTypes) {
    
    var Invoice = sequelize.define('Invoice', {
    
        invoice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        customer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        billingAdress: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        billingCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        billingState: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },

        billingZipCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
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