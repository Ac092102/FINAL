const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/student/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [req.params.id]);
if (rows.length > 0) res.json(rows[0]);
else res.status(404).json({ message: 'Student not found' });
});

module.exports = router;