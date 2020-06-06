const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../dbModels/registerModel");

const router = express.Router();


router.post('/', async (req, res) => {
    let { username, password } = req.body;
    try{
        const user = await Users.findBy({username}).first();
        if ( user && bcrypt.compareSync(password, user.password)){
            req.session.user = user;
            res.status(200).json({message: ` it works, ${username}`})
        }else{
            res.status(401).json({message: "invalid credentials"})
        }
    }catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;