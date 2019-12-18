var express =require ('express')

module.exports = function(Student){
    
    var router =express.Router()
    router.get('/students', function(req, res, next){
        Student.findAll().then( students => {
            return res.json(students)
        })
    })

    router.post('/students', function(req, res, next){
        Student.create(req.body).then( (data) =>{
            return res.status(201).send('ok')
        })
    })
    router.patch('/student', function(req,res, next){
        Student.update({score: req.body.score},
        {where: {studentID: req.body.studentID}}).then( result =>{
          return res.status(200).send('score updated')
        }).catch( err => next(err))
      })
      
    return router
}