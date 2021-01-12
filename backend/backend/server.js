const sequelize = require('./src/database/Connection')
const express = require('express')
var app = express()
const UserRouter = require('./src/routes/User.route')
const ActivityRouter = require('./src/routes/Activity.route')
const FeedbackRouter = require('./src/routes/Feedback.route')

app.use(express.json());

app.use('/api/auth', UserRouter);
app.use('/api/activity',ActivityRouter);
app.use('/api/feedback', FeedbackRouter);
app.use(express.urlencoded({
    extended:false
}))


app.listen(3000);