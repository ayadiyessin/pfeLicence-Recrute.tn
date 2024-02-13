const mongoose = require('mongoose');

const Favori = mongoose.Schema({
    FAVORI_OFF: String,
    ID_OFFRE: String,
    ID_DEMANDEUR:String
},{
    timestamps: true
} );

module.exports = mongoose.model('Favori', Favori);