const FeedbackModel = require('../models/Feedback')
const sequelize = require('../database/Connection')
const Sequelize = require('sequelize')

//add feedback into existing activity 
const addFeedback = async (require,response) =>{
    const body = require.body
    try{
        let feedback = await FeedbackModel.create({
            type_id:body.type_id,
            user_id:body.user_id,
            activity_id:body.activity_id,
            date:body.date
        })
        return response.status(200).json({
            msg:"feedback successfully added",
            data:feedback
        })
    }catch(error){
        return response.status(409).json({
            msg:"bad request"
        })
    }
}

const findFeedbackByType = async (require,response) => {
    const body = require.body
    try{
        let feedback = await FeedbackModel.findOne({where:{feedback_type:body.feedback_type}})
        return response.status(200).json({
            msg:"Feedback successfully retrieved",
            data:feedback
        })
    }catch(error){
        return response.status(404).json({
            msg:"Feedback not found"
        })
    }
}

const findFeedbackByActivityId = async (require,response) => {
    const body = require.body
    try{
        let feedback = await FeedbackModel.findAll({where:{activity_id:body.activity_id}})
        let totalOK, totalInteresting, totalAmazing, totalBoring;
        for(let i=0; i<feedback.length;i++)
        {
            if(feedback[i].type_id===1) 
            {
                totalOK++;
            }
            
            if(feedback[i].type_id===2)
            {
                totalInteresting++;
            }

            if(feedback[i].type_id===3)
            {
                totalAmazing++;
            }

            if(feedback[i].type_id===4)
            {
                totalBoring++;
            }

        }
        return response.status(200).json({
            msg:"Feedback successfully retrieved",
            data:{
                totalOK:totalOK,
                totalAmazing:totalAmazing,
                totalInteresting:totalInteresting,
                totalBoring:totalBoring
            }
        })
    }catch(error){
        return response.status(404).json({
            msg:"Feedback not found"
        })
    }
}


const findAllFeedbackByActivityId = async (require,response) => {
    const body = require.body;
    // sa trimita si user id ca sa verific daca e prof sau nu
    try{
        let feedback = await FeedbackModel.findAll({where:{activity_id:body.activity_id}})
        
        return response.status(200).json({
            msg:"Feedback successfully retrieved",
            data:feedback    
        })
    }catch(error){
        return response.status(404).json({
            msg:"Feedback not found"
        })
    }
}





//+ find all feedbacks for a specific activity!
//+ find all feedbacks

module.exports = {addFeedback,findFeedbackByType}