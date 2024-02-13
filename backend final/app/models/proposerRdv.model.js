const mongoose = require('mongoose');

const ProposerRdvSchema = mongoose.Schema({
    DATE: String,
    HEURE: String,
    CONF_DATE: String,
    ID_RECRUTEUR: String,
    ID_CANDIDATURE: String    
},{
    timestamps: true
} );

module.exports = mongoose.model('ProposerRdv', ProposerRdvSchema);