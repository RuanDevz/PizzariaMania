const {verify} = require('jsonwebtoken')


const validateToken = (req,res, next) =>{
    const accessToken = req.header("accessToken")

    if(!accessToken){
        return res.json({error: "Você precisa estar logado"})
    }

    try{
        const validToken = verify(accessToken, "Tokenimportant")

        if(validToken){
            return next()
        }
    }catch(err){
        res.status(500).json({error: err})
    }
}

module.exports = validateToken