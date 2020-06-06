const express = require("express");
const Users = require("../dbModels/registerModel");

const router = express.Router();

router.get('/',  (req, res) => {
    Users.find()
        .then(users => res.status(200).json(users))
        .catch( err => res.status(404).json(err))
})

module.exports = router;