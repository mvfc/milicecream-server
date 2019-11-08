const mongoose = require('mongoose');

const Purchase = mongoose.model('Purchase');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const purchases = await Purchase.paginate({}, { page, limit: 10 });

        return res.json(purchases);
    },

    async show(req, res) {
        const sale = await Purchase.findById(req.params.id);

        return res.json(sale);
    },

    async store(req, res) {
        const sale = await Purchase.create(req.body);

        return res.json(sale);
    },

    
    async update(req, res) {
        const sale = await Purchase.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(sale);
    },

    async destroy(req, res) {
        await Purchase.findByIdAndDelete(req.params.id);

        return res.send();
    }
};