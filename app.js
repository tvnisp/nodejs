const express = require('express');

const path = require('path');

const app = express();

// Routes
const users = require('./routes/users');
const admin = require('./routes/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use(admin);
app.use('/users', users);

app.listen(3000);