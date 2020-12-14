const ActivityModel = require('../models/Activity')
const sequelize = require('../database/Connection')
const Sequelize = require('sequelize')

const addActivity = async (require,response) =>{
    const body = require.body
    try{
        let activity = await ActivityModel.create({
            description:body.description,
            activity_code:body.activity_code,
            user_id:body.user_id,
            date:body.date
        })
        return response.status(200).json({
            msg:"activity successfully added",
            data:activity
        })
    }catch(error){
        return response.status(409).json({
            msg:"bad request"
        })
    }
}

const findActivityByCode = async (require,response) => {
    const body = require.body
    try{
        let activity = await ActivityModel.findOne({where:{activity_code:activity_code}})
        return response.status(200).json({
            msg:"Activity successfully retrieved",
            data:activity
        })
    }catch(error){
        return response.status(404).json({
            msg:"activity not found"
        })
    }
}

module.exports = {addActivity,findActivityByCode}

