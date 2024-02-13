const mongoose = require('mongoose');

const LangueOffreSchema = mongoose.Schema({
    NIV_LANG_OFF: String,
    ID_OFFRE: String,
    ID_LANGUE:String
},{
    timestamps: true
} );

module.exports = mongoose.model('LangueOffre', LangueOffreSchema);