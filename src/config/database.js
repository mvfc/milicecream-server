export default class initDb {
    constructor() {
        const mongoose = require('mongoose');
        mongoose.connect(
        'mongodb://localhost:27017/milicecream-api', 
            {useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true,
            }
        )
    }
};