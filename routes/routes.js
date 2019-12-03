var express = require('express')
var router =express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'The Quiz app... have fun as you attempt the questions'})
})

module.exports = router