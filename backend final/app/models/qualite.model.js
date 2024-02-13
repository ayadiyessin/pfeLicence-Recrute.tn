const mongoose = require('mongoose');

const QualiteSchema = mongoose.Schema({
    NOM_QUA: String,
    ID_DEMANDEUR: String
},{
    timestamps: true
} );

module.exports = mongoose.model('Qualite', QualiteSchema);