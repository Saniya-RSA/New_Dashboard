const express = require('express');
const { indexView, iconsView } = require('../controllers/homeController');
const router = express.Router();

router.get('/', indexView);
router.get('/icons', iconsView);

module.exports = {
    routes: router
}