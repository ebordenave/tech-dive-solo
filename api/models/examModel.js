const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examSchema = new Schema({
    examId: {
        type: String,
        required: true,
    },
    keyFindings: {
        type: String,
        required: true,
    },
    brixiaScores: {
        type: Number,
        required:true,
    },
    imageURL: {
        type: Image,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);



