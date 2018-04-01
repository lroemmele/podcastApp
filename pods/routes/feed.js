var express = require('express');
var router = express.Router();
var superagent = require('superagent');


router.get('/', function(req, res, next) {
     //var term = req.params.term;

     var url = req.query.url;
     if (url == null){
          res.json({
               confirmation: 'fail',
               message: 'Missing Feed Url'
          })
     }

     superagent
     .get(url)
     .query(null)
     .end((err, response)=>{
          if (err){
               res.json({
                    confirmation: 'fail',
                    message: err
               })

               return
          }


          res.send(response.text);
     });
});

module.exports = router;
