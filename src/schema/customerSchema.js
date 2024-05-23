const Joi = require('joi')

/** Auth Schema Started */
const customer = Joi.object().keys({
    first_name: Joi.string().trim().required(),
    last_name: Joi.string().trim().required(),
    city: Joi.string().valid("Ahmedabad", "Baroda", "Bharuch", "Surat", "Vadodara").required(),
    company: Joi.string().valid("SublimeDataSystems", "TCS", "Wipro", "HCL", "Capegemini").required(),
})

module.exports = {
    customer,
}
