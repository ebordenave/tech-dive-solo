const Exam = require('../models/examModel');
const mongoose = require('mongoose');


/* GET all exams */
const getAllExams = async (req, res) => {
    const exams = await Exam.find({}).sort({createdAt: -1});

    res.status(200).json(exams);
}


/* GET a single exam */
const getExam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Exam ID' });
    }


    const exam = await Exam.findById(id);

    if (!exam) {
        return res.status(404).json({ error: 'Exam not found' });
    }

    res.status(200).json(exam);
    
}

/* POST a new exam */
const createExam = async (req, res) => {
    const {examId, keyFindings, brixiaScores, imageURL} = req.body;

    /* add doc to database */
    try {
        const exam = await Exam.create({examId, keyFindings, brixiaScores, imageURL})
        res.status(200).json(exam);
    }   catch (error) {
        res.status(400).json({error: error.message});
    }
}


/* DELETE a exam */
const deleteExam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Exam ID' });
    }

    const exam = await Exam.findOneAndDelete({_id: id})

    if (!exam) {
        return res.status(400).json({ error: 'Exam not found' });
    }

    res.status(200).json(exam);  
}



/* PATCH a exam */
const updateExam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Exam ID' });
    }

    const exam = await Exam.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!exam) {
        return res.status(400).json({ error: 'Exam not found' });
    }

    res.status(200).json(exam);
}


module.exports = {
    createExam,
    getExam,
    getAllExams,
    deleteExam,
    updateExam
}