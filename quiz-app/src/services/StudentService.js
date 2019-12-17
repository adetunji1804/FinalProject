import axios from 'axios'
//import response from 'express'

const base_url = '/api/students'
export default{
    getAllStudents(){
        return axios.get(base_url).then(response =>{
            return response.data
        })
    },

    addStudent(student){
        return axios.post(base_url, student).then(response =>{
            return response.data
        })
    }
}
/*
var express = require('express')
var  Student = require('../models').Student
var Sequelize = require('sequelize')

var router = express.Router()

router.get('/', function(req, res,next){
    Student.findAdll({order: ['studentID']}, {where: response.query}).then( results =>{
        return res.json(results)
    }).catch( err => next(err))
}) 

module.exports = router*/
    