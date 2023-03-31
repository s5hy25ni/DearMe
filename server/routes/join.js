const express = require('express');
const router = express.Router();
const mysql = require('./mysql');
const crypto = require('crypto');

router.post('/', (req, res) => {
    
    const salt = crypto.randomBytes(128).toString('base64');

    var state = req.body.state
    var id = req.body.id
    var pw = req.body.pw
    const pw_hash = crypto.createHash('sha512').update(pw + salt).digest('hex');
    var name = req.body.name
    var pn = req.body.pn

    console.log("state : "+state)

    if (state === "IDCon") {
        mysql.query("SELECT user_id FROM user_info WHERE user_id = ?",
            [id],
            function(error, result){
                if(!error) {
                    if(result[0] == undefined) { res.json({message : "notOverlap"}) }
                    else if(result[0]) { res.json({message : "overlap"}) }
                    else { console.log("ID confirm SELECT error") }
                }
                else { console.log("join id overlap confirm select error : "+error) }
        })
    }
    else if (state === "join") {
        mysql.query('INSERT INTO user_info(user_id, user_salt, user_pw_hc, user_name, user_phone) VALUES(?, ?, ?, ?, ?);',
            [id, salt, pw_hash, name, pn],
            function(error, result){
                if(!error){
                    res.json({message : "joinSuccess"})
                }
                else { console.log("join INSERT result error : " + error)}
        })
    }
    else {
        console.log("client join state error")
    }
})

module.exports = router;