"use strict";

/** @type {import('sequelize-cli').Migration} */
// migration-create-customers.js
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("customers", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            first_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            last_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },

            city: {
                allowNull: false,
                type: Sequelize.ENUM("Ahmedabad", "Baroda", "Bharuch", "Surat", "Vadodara"),
            },

            company: {
                allowNull: false,
                type: Sequelize.ENUM("SublimeDataSystems", "TCS", "Wipro", "HCL", "Capegemini"),
            },

            // Additional columns as per your requirements
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            deleted_at: {
                allowNull: true,
                type: Sequelize.DATE,
                defaultValue: null,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("customers");
    },
};
