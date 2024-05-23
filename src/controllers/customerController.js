const sequelize = require("../../config/db.config").sequelize;
const { Sequelize, Op } = require("sequelize");

const Customers = require("../models/customers");

const list = async (req, res, next) => {
    try {
        const { searchTerm, recordPerPage, page, sortBy, sortOrder } = req.query;
        const whereClause = {};
        let orderClause = [];

        if (searchTerm) {
            whereClause[Op.and] = [
                {
                    [Op.or]: [
                        {
                            first_name: {
                                [Op.like]: `%${searchTerm}%`,
                            },
                        },
                        {
                            last_name: {
                                [Op.like]: `%${searchTerm}%`,
                            },
                        },
                        {
                            city: {
                                [Op.like]: `%${searchTerm}%`,
                            },
                        },
                    ],
                },
            ];
        }

        if (sortBy && sortOrder) {
            orderClause = [[sortBy, sortOrder]];
        }
        const limit = parseInt(recordPerPage);
        const offset = (parseInt(page) - 1) * limit;

        const options = {
            where: whereClause,
            order: orderClause,
            limit: limit || 10,
            offset: offset || 0,
        };
        const customersList = await Customers.findAll(options);
        const count = await Customers.count();

        const customers = {
            data: customersList,
            meta: {
                total_records: count,
                current_page: parseInt(page),
            },
        };

        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json({
            error: {
                message: 'Failed to retrieve "Customers"',
            },
        });
    }
};
const create = async (req, res, next) => {
    try {
        const { first_name, last_name, city, company } = req.body;

        const customerData = {
            first_name: first_name,
            last_name: last_name,
            city: city,
            company: company,
        };

        const customers = await Customers.create(customerData);

        return res.status(200).json(customers);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: {
                message: 'Failed to retrieve "Customers"',
            },
        });
    }
};
const detail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const customers = await Customers.findByPk(id);
        if (!customers) {
            return res.status(404).json({
                error: {
                    message: 'Customer Not Found"',
                },
            });
        }
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json({
            error: {
                message: 'Failed to retrieve "Customers"',
            },
        });
    }
};
const uniqueCities = async (req, res, next) => {
    try {
        const options = {
            attributes: ["city", [Sequelize.fn("COUNT", Sequelize.col("id")), "customerCount"]],
            group: ["city"],
        };

        const customers = await Customers.findAll(options);
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json({
            error: {
                message: 'Failed to retrieve "Customers"',
            },
        });
    }
};

module.exports = {
    list,
    create,
    detail,
    uniqueCities,
};
