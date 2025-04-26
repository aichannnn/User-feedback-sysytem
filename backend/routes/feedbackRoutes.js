const express = require("express");
const router = express.Router();
const {submitFeedback,getFeedbacks} = require('../controllers/feedbackControllers')


router.get('/feedback',getFeedbacks);
router.post('/feedback',submitFeedback);

module.exports = router;