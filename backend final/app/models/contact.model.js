const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    NOM_PRE_CON: String,
    EMAIL_CON: String,
    SUJ_CON: String,
    DESC_CON : String
},{
    timestamps: true
} );

module.exports = mongoose.model('Contact', ContactSchema);