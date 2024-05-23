module.exports.validate = (schema, property) => {
    return (req, res, next) => {
        const { error } = schema.validate(req[property])
        if (error === undefined) {
            next()
        } else {
            const message = error.details.map(i => i.message).join(',')
            return res.status(422).json({
                error: {
                    message: message.replace(/[\\"]/g, ''),
                    type: 'Validation Error',
                },
            })
        }
    }
}
