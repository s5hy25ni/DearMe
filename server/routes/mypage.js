const express = require('express');
const router = express.Router();
const mysql = require('./mysql');
const crypto = require('crypto');

router.post('/', (req, res) => {

    var state = req.body.state
    var id = req.body.id

    console.log("state : "+state)

    if (state === "mypage") {
        mysql.query("SELECT * FROM user_info WHERE user_id = ?",
            [id],
            function(error, result){
                if(!error) {
                    res.json({
                        message : "mypageInfo",
                        salt : result[0].user_salt,
                        pw_hc : result[0].user_pw_hc,
                        name : result[0].user_name,
                        pn : result[0].user_phone
                    })
                }
                else { console.log("mypage select error : "+error) }
        })
    }
    else {
        console.log("client mypage state error")
    }
})

module.exports = router;