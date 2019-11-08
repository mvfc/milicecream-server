const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const SaleSchema = new mongoose.Schema({
    apartment: {
        type: String,
        required: true,
    },
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
    totalValue: {
        type: Number,
        required: true,
    },
    paymentType: {
        type: String,
        required: true,
    },
    delivered: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

SaleSchema.plugin(mongoosePaginate);

mongoose.model('Sale', SaleSchema);