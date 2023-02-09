const express = require('express');

const router = express.Router();

const path = require('path');

const appDir = require('../util/path');

// Get users page /users
router.use((req, res, next) => {
    res.sendFile(path.join(appDir, 'views', 'users.html'));
})

module.exports = router;