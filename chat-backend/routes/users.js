var express = require('express');
var router = express.Router();
var request = require('request');


/* GET users listing. */
router.get('/login', function(req, res, next) {
    // Comment out this line:
  //res.send('respond with a resource');
    // request('https://api.hackaday.io/v1/projects?api_key=N2uCziIKJYFkiN5i', function (error, response, body) {
    //     console.log('error:', error); // Print the error if one occurred 
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //     console.log('body:', body.projects); // Print the HTML for the Google homepage. 
        console.log("Login")
        res.json({test: 'login'});
    // });
  // And insert something like this instead:
  
});

router.get('/:test', function(req, res, next) {
    // Comment out this line:
  //res.send('respond with a resource');
    // request('https://api.hackaday.io/v1/projects?api_key=N2uCziIKJYFkiN5i', function (error, response, body) {
    //     console.log('error:', error); // Print the error if one occurred 
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
    //     console.log('body:', body.projects); // Print the HTML for the Google homepage. 
    console.log("test");
        res.json({test: 'test'});
    // });
  // And insert something like this instead:
  
});

module.exports = router;