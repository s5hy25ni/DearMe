const express = require('express');
const router = express.Router();
const mysql = require('./mysql');
const crypto = require('crypto');

router.post('/', (req, res) => {

    var state = req.body.state
    var name = req.body.name
    var pn = req.body.pn

    console.log("state : "+state)

    if (state === "findID") {
        mysql.query("SELECT user_id FROM user_info WHERE user_name = ? AND user_phone = ?",
            [name, pn],
            function(error, result){
                if(!error) {
                    if(result[0] == undefined) { res.json({message : "findID False"}) }
                    else if(result[0]) { 
                        res.json({
                            message : "findID Success",
                            id : result[0].user_id})
                     }
                    else { console.log("findID result error") }
                }
                else { console.log("findID select error : "+error) }
        })
    }
    else {
        console.log("client findID state error")
    }
})

module.exports = router;