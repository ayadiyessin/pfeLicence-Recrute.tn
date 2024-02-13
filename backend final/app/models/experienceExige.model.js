const mongoose = require('mongoose');

const ExperienceExigeSchema = mongoose.Schema({
    NOM_EXP_OFF: String,
    NB_EXP_OFF: String,
    ID_OFFRE: String
}, {
    timestamps: true
});

module.exports = mongoose.model('ExperienceExige', ExperienceExigeSchema);