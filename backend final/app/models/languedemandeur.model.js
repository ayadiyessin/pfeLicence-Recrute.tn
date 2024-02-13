const mongoose = require('mongoose');

const LanguedemandeurSchema = mongoose.Schema({
    NIV_LANG_DEM: String,
    ID_LANGUE: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
} );

module.exports = mongoose.model('Languedemandeur', LanguedemandeurSchema);