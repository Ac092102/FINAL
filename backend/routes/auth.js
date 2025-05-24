const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
const { id } = req.body;
  const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
if (rows.length > 0) {
    res.json({ success: true, student: rows[0] });
} else {
    res.status(401).json({ success: false, message: 'Student not found' });
}
});

module.exports = router;