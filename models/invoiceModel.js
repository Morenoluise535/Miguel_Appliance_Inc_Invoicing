module.exports = function(sequelize, DataTypes) {
    
    const Invoice = sequelize.define('Trip', {
    
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

    Trip.associate = function (models) {
        Trip.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Trip;
}