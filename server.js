var express = require('express')
var Sequelize = require('sequelize')
var api_routes = require('./routes/api.js')

//Database Configuration
sequelize = new Sequelize({
    dialect:'sqlite',
    storage: './db.sqlite3'
})

//verify connection
sequelize.authenticate()
.then( ()=> console.log('connected to sqlite'))
.catch(err => console.log('error connection', err))

// initialize student model
let student = require('./model/student.js')(sequelize, Sequelize)

//App configuration
var app = express = express()
app.use(require('body-parser').json())
app.use('/api', api_routes(student))

//start server running
var server = app.listen(process.env.PORT || 3000, function(){
    console.log('app running on port', server.address().port)
})