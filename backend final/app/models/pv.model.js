const mongoose = require('mongoose');

const PvSchema = mongoose.Schema({
    NOTE_SOFTSK: String,
    NOTE_HARDSK: String,
    NOTE_MATRISLANG: String,
    NOTE_PONCTUALITE: String,
    ETAT_PV: String,
    MESSAGE_PV: String,
    ID_ENTRETIEN: String,  
    ID_DEMANDEUR: String
  
},{
    timestamps: true
} );

module.exports = mongoose.model('Pv', PvSchema);