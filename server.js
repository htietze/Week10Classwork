// create express app,
// include route that was made
// start running the server


// Registers components? express, routes, and path?
let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

let app = express()
// using express to take the path which is the directory name, hello-vue? and finds the distribution folder
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))
// not. sure.
app.use('/api', routes)
// setting up the server, using express. Process - environment - port? setting the port for the server, which is 3000. then
// it sends that info to the console to display
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})