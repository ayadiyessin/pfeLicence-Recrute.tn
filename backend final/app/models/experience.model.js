const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    NOM_ENT_EXP: String,
    TYPE_EXP: String,
    POSITION_EXP: String,
    DESC_EXP: String,
    OUTIL_EXP: String,
    DAT_DEB_EXP: String,
    DAT_FIN_EXP: String,
    ID_DEMANDEUR: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Experience', ExperienceSchema);