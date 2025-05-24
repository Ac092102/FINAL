const express = require('express');
const router = express.Router();
const db = require('../db');

// Submit answers and calculate score
router.post('/score', async (req, res) => {
const { student_id, quiz_id, answers } = req.body;
let score = 0;

for (const answer of answers) {
    const [rows] = await db.query('SELECT correct_answer FROM questions WHERE id = ?', [answer.question_id]);
    const isCorrect = rows[0].correct_answer === answer.answer;
    if (isCorrect) score += 1;

    await db.query(
    'INSERT INTO student_answers (student_id, question_id, answer, is_correct) VALUES (?, ?, ?, ?)',
    [student_id, answer.question_id, answer.answer, isCorrect]
    );
}

await db.query(
    'INSERT INTO scores (student_id, quiz_id, score) VALUES (?, ?, ?)',
    [student_id, quiz_id, score]
);

res.json({ score });
});

// Get score
router.get('/score/:studentId', async (req, res) => {
const [rows] = await db.query(
    'SELECT * FROM scores WHERE student_id = ? ORDER BY created_at DESC LIMIT 1',
    [req.params.studentId]
);
res.json(rows[0] || {});
});

module.exports = router;