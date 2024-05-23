const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../../config/db.config").sequelize;

const Customers = sequelize.define(
    "Customers",
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        // Define the model attributes (columns)
        first_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },

        city: {
            allowNull: false,
            type: DataTypes.ENUM("Ahmedabad", "Baroda", "Bharuch", "Surat", "Vadodara"),
        },

        company: {
            allowNull: false,
            type: DataTypes.ENUM("SublimeDataSystems", "TCS", "Wipro", "HCL", "Capegemini"),
        },
    },
    {
        // Define additional options for the model
        tableName: "customers", // Specify the table name
        timestamps: true, // Enable timestamps (createdAt, updatedAt)
        paranoid: true, // Enable soft deletion (deletedAt)
        deletedAt: "deleted_at", // If you want to give a custom name to the deletedAt column
        createdAt: "created_at", // If you want to give a custom name to the createdAt column
        updatedAt: "updated_at", // If you want to give a custom name to the updatedAt column
        underscored: true, // Use underscored naming convention for columns
    }
);

module.exports = Customers;
