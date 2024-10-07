const express = require('express');
const router = express.Router();
const j = require('../controller/Controller'); // Path to your controller

// Route to display homepage with MP3 files
router.get('/', j.index);

// Route to display upload form
router.get('/add', j.uploadPage);

// Route to handle MP3 file upload
router.post('/upload', j.uploadFile);

module.exports = router;
