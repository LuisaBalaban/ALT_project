const sequelize = require('./src/database/Connection')
const express = require('express')
var app = express()
const UserRouter = require('./src/routes/User.route')
const ActivityRouter = require('./src/routes/Activity.route')
const cors=require('cors')

app.use(express.json());
app.use(cors())
app.use('/api/auth', UserRouter);
app.use('/api/activity',ActivityRouter);

app.use(express.urlencoded({
    extended:false
}))


app.listen(3000);
