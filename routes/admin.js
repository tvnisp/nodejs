const express = require('express');

const router = express.Router();

const path = require('path');

const appDir = require('../util/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(appDir, 'views', 'index.html'))
 })

module.exports = router;