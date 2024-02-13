const mongoose = require('mongoose');

const CommentaireSchema = mongoose.Schema({
    DESC_COM: String,
    ID_OFFRE: String,
    ID_DEMANDEUR: String,
    ID_RECRUTEUR: String
},{
    timestamps: true
});

module.exports = mongoose.model('Commentaire', CommentaireSchema);