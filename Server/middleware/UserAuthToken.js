import Jwt from "jsonwebtoken"
import { $users } from "../models/users.model.js"

export const userAuthToken = (req,res, next) =>{
    try{
        
        const tokenReq = req.cookies.UserloginToken

       

         const checkToken = Jwt.verify(tokenReq, "secureToken")

         req.AuthUserId = checkToken.userID
         console.log(checkToken)

        

        next()

    }catch (err) {
        res.status(301).send({
            process: false,
            message: err.message
        })

    }
}

export const AutoLogin =  async (req, res) =>{
   try{
    const UserId = req.AuthUserId
    const userData = await $users.findById(UserId)

    if(!userData) throw new Error("User Not Found")
       
   res.status(200).send({
    process: true,
    message: "Auto Login Success",
    data: userData
   })


    console.log(userData)
   }catch (err){
    res.status(301).send({
        process: false,
        message: err.message
        })
   }

}