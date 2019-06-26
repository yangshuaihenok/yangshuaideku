const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users',{
      name:req.params.name,
      supplies:['圣诞节','中秋节','元旦']
  })
})

module.exports = router;
