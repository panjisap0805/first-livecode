const { User, Food } = require('../models/index')
const { verifyToken } = require('../helpers/jwt')

async function authentication(req, res){
    const access_token = req.headers.token

    if (!access_token){
        next(res.status(401).json({error: "401 unauthorize"}))
    }
    else {
        const payload = verifyToken(access_token)

        try {
            const user = await User.findOne({
                where:{
                    email: payload.email
                }
            })
            if (!user){
                next(res.status(401).json({error: "401 unauthorize"}))
            }
            else {
                req.userLogin = user
                next()
            }
        }
        catch {
            next(res.status(500).json({error: "internal server error"}))
        }
    }
}

async function authorization(req, res, next){
    const foodId = Number(req.params.id)

    try{
        const food = await Food.findByPk(foodId)

        if(!food){
            next(res.status(404).json({error: "404 Not Found"}))
        }
        else {
            if(food.UserId !== req.userLogin.id){
                next(res.status(403).json({error: "You dont have access"}))
            }
            else{
                next()
            }
        }
    }
    catch{
        next(res.status(500).json({error: "internal server error"}))
    }
}

module.exports = { authentication, authorization }