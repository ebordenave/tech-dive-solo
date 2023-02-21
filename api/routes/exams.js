const express = require('express');
const Exam = require('../models/exam');

const router = express.Router();


/* GET all exams */
router.get('/', (req, res) => {
    res.json({mssg: 'GET all exams'});
});

/* GET a single exam */
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single exam'});
});

/* POST a new exam */
router.post('/', async(req, res) => {
    const {examId, keyFindings, brixiaScores, imageURL} = req.body;

    try {
        const exam = await Exam.create({examId, keyFindings, brixiaScores, imageURL})
        res.status(200).json(exam);
    }   catch (error) {
        res.status(400).json({error: error.message});
    }
});
    

/* DELETE an exam */
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an exam'});
});

/* UPDATE an exam */
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an exam'});
});

module.exports = router;
