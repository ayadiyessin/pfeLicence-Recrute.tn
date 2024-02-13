const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    DESC_MES: String,
    ID_RECRUTEUR: String,
    ID_DEMANDEUR: String    
},{
    timestamps: true
} );

module.exports = mongoose.model('Message', MessageSchema);