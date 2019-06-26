const express = require('express');
const router = express.Router();
router.get('/',function(req,res,next){
    console.log('到了')
    res.send('主页')
})
module.exports = router;