const UserModel = require('../models/User')
const sequelize = require('../database/Connection')
const Sequelize = require('sequelize');
const User = require('../models/User');


const register = async (req, res) => {
    const body = req.body;
    try{
        let user = await UserModel.build({
            username:body.username,
            email:body.email,
            password:body.password,
            name:body.name,
            roleId:body.roleId
        })
        user.save()
        return res.status(200).json({
            msg:"user created",
            data:user
        })
    }catch(error){
        console.log(error)
        res.status(409).json({
            msg:'bad credentials'
        })
    }    
}

const login = async (req, res) => {
    const body = req.body;
   
    try{
        let user = await User.findOne({where:{username:body.username}})
       console.log(user)
        if(user.password===body.password)
        {
            return res.status(200).json({msg:'authentification successful', 
                                        role:user.roleId})
        }
        else
        {
            return res.status(409).json({msg:'bad credentials'})
        }
       
    }catch(error){
        console.log(error)
        res.status(404).json({
            msg:'user not found'
           
           
        })
    }    
}


module.exports = {register, login}