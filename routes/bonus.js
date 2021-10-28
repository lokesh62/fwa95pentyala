var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // Build a fake url so we can get the search parameters using a URL object
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  var input = Math.floor((Math.random() * 100) + 1)
  var output = null
  if(search_params.get("x")){
    input = search_params.get("x")
  }
  res.write(`Math.atan() applied to ${input} is ${Math.atan(input)}\n`);
  res.write(`Math.exp() applied to ${input} is ${Math.exp(input)}\n`);
  res.write(`Math.expm1() applied to ${input} is ${Math.expm1({input})}\n`);
  res.sendDate();

  


});

module.exports = router;

   
   