const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    ENONCE_QUE: String,
    REP_T: String,
    REP_F1: String,
    REP_F2: String,
    ID_TEST: String
},{
    timestamps: true
} );

module.exports = mongoose.model('Question', QuestionSchema);