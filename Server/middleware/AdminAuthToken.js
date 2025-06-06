import Jwt from "jsonwebtoken"
import { $users } from "../models/users.model.js"


export const AdminAutoToken = (req, res, next) => {
    try {

        const tokenReq = req.cookies.AdminToken
        console.log(tokenReq)

        const checkToken = Jwt.verify(tokenReq, "adminSecureToken")

        console.log(checkToken)

        req.AuthAdminId = checkToken.userID

        



        next()

    } catch (err) {
        res.status(301).send({
            process: false,
            message: err.message
        })

    }
}

export const AdminAutoLogin =  async (req, res) =>{
   try{
    const UserId = req.AuthAdminId
    const userData = await $users.findById(UserId)

    if(!userData) throw new Error("Admin Not Found")
       
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