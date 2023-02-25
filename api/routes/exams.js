const express = require('express');
const {
    createExam,
    getAllExams,
    getExam,
    deleteExam,
    updateExam
} = require('../controllers/exam-controller')

const router = express.Router();


/* GET all exams */
router.get('/', getAllExams);

/* GET a single exam */
router.get('/:id', getExam);

/* POST a new exam */
router.post('/', createExam);
    
/* DELETE an exam */
router.delete('/:id', deleteExam);

/* UPDATE an exam */
router.patch('/:id', updateExam);



module.exports = router;
