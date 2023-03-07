const mongoose = require('mongoose');
mongoose.set("strictQuery",false);


const Schema = mongoose.Schema;

const examSchema = new Schema({
    examId: {
        type: String,
        required: true,
        unique: true
    },
    keyFindings: {
        type: String,
        required: true,
    },
    brixiaScores: {
        type: String,
        required:true,
    },
    imageURL: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Exam', examSchema);



