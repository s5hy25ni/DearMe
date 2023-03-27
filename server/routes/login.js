const express = require('express');
const router = express.Router();
const mysql = require('./mysql');
const crypto = require('crypto');

router.post('/', (req, res) => {

    var state = req.body.state
    var id = req.body.id
    var pw = req.body.pw
    var salt = ""
    var pw_hash = ""

    console.log("state : "+state)

    if (state === "login") {
        mysql.query("SELECT * FROM user_info WHERE user_id = ?",
            [id],
            function(error, result){
                if(!error) {
                    if(result[0] == undefined) { res.json({message : "loginFalse"}) }
                    else if(result[0]) { 
                        salt = result[0].user_salt
                        pw_hash = crypto.createHash('sha512').update(pw + salt).digest('hex');
                        if(pw_hash == result[0].user_pw_hc) { res.json({message : "loginSuccess"}) }
                        else { res.json({message : "loginFalse"}) }
                     }
                    else { console.log("login SELECT error") }
                }
                else { console.log("join id overlap confirm select error : "+error) }
        })
    }
    else if (state === "join") {
        mysql.query('INSERT INTO user_info(user_id, user_salt, user_pw_hc, user_name_hc, user_phone_hc) VALUES(?, ?, ?, ?, ?);',
            [id, salt, pw_hash, name_hash, pn_hash],
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