const mongoose = require('mongoose');

const CentresinteretSchema = mongoose.Schema({
    NOM_CI: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
});

module.exports = mongoose.model('Centresinteret', CentresinteretSchema);