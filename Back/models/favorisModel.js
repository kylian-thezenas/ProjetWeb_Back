const mongoose = require('mongoose');

const favorisSchema = new mongoose.Schema({
    dresseurName:{
        type: String,
        ref: 'Dresseur',
        required: true
    },
    pokemonNumber:{
        type: Number,
        ref: 'Pokemon',
        required: true
    }
});

const favorisModel = mongoose.model('favoris', favorisSchema);
module.exports = favorisModel;