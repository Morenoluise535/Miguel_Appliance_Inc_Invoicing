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

        // The password cannot be null
        arrivalDate: {
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