const { Schema, model } = require('mongoose');
const Joi = require('joi');

module.exports.Product = model('Product', Schema({
    name: String,

}, { timestamps: true }));

module.exports.validate = product => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(product);
}