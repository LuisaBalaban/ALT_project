var express = require('express')
const router = express.Router()
const ActivityController = require('../controllers/Activity.controller')


router.post('/addActivity',ActivityController.addActivity)
router.post('/getActivity',ActivityController.findActivityByCode)

module.exports = router