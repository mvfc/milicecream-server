const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PurchaseSchema = new mongoose.Schema({
    productList: [
        {
            productId: {
                type: String,
                required: true, 
            },
            qty: {
                type: Number,
                required: true,
            },
            pricePerUnit: {
                type: Number,
                required: true,
            },
    }],
    paymentType: {
        type: String,
        required: true,
    },
    totalValue: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

PurchaseSchema.plugin(mongoosePaginate);

mongoose.model('Purchase', PurchaseSchema);