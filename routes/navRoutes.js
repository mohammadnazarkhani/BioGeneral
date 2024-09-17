const express = require('express');
const router = express.Router();
const path = require('path');

// home routes
router.get('/', (req, res) => {
    res.redirect(301, '/home')
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'views', 'index.html'));
})

module.exports = router;