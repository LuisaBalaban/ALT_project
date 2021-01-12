var express = require('express')
const router = express.Router()
const FeedbackController = require('../controllers/Feedback.controller')


router.post('/createFeedback', FeedbackController.addFeedback)
router.get('/getFeedbackByType', FeedbackController.findFeedbackByType);
router.get('/getAllFedbackByActivityId', FeedbackController.findAllFeedbackByActivityId);
router.get('/getFeedbackCountByActivityId', FeedbackController.findFeedbackCountByActivityId);

module.exports = router