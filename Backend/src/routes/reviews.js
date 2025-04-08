// src/routes/reviews.js
const express = require('express');
const { addReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });

router.route('/').post(protect, addReview);

module.exports = router;