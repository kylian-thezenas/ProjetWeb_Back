const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    name:{
        type: Number,
        required: true,
        unique: true,
    },
    fortContre:{
        type: String,
    },
    faibleContre:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    }
});

const typeModel = mongoose.model('type', typeSchema);
module.exports = typeModel;