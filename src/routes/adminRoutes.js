const express = require('express');
const admin = express.Router();

admin.route('/')
  .get((req, res) => {
    res.render('admin');
  });

module.exports = admin;
