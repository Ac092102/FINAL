const express = require('express');
const router = express.Router();
const db = require('../db');

// Get questions by quiz_id (assume 1 quiz for now)
router.get('/quiz/:quizId', async (req, res) => {
const [rows] = await db.query('SELECT id, question FROM questions WHERE quiz_id = ?', [req.params.quizId]);
res.json(rows);
});

module.exports = router;