const express = require('express')
const app = express()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('profile', 'root', 'newpass', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})

app.use(express.static('frontend')) // it all goes in the frontend folder

app.listen(3000) // cred?

