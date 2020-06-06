const express = require('express');
const router = express.Router();

router
    .route("/test")
    .get((req, res) => {
        res.send("At test Route")
    })

module.exports = router;