
// Require the express lib, create router, 
// create one API route, accessed,
// export the router to be used by another code part

let express = require('express')
let router = express.Router()

// a request to this route will get the json response
// {"message":"hello!"}
router.get('/', function(req, res, next) {
    res.json({'message': 'This is a message'})
})

module.exports = router