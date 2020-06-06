const express = require("express");
const usersModel = require('../dbModels/registerModel');
const bcrypt = require("bcryptjs");

const router  = express.Router();


router.post('/newUser', async (req,res)=>{
        let user = req.body;
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash;
        
        try{
            const added = await usersModel.add(user)
            res.status(201).json(added)
        }catch(err){
            console.log(`__CATCH__ : ${err}`)
            res.status(500).json(err);
        }
    })

module.exports = router;