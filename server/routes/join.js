const express = require('express');
const router = express.Router();
const mysql = require('./mysql');

router.post('/', (req, res) => {
    
    console.log("state : " + req.body.state)
    console.log("id : " + req.body.id)
    var id = req.body.id

    mysql.query('SELECT * FROM user_info WHERE user_id=?',[id],
    function(error, result){
        if(!error){console.log("created_at : " + result[0].created_at)}
        else { console.log("오류 : " + error)}
    })
})

module.exports = router;