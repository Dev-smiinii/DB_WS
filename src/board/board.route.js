const express = require('express')
const router = express.Router()
const boardController = require('./board.controller')

router.get('/list',boardController.getList)

router.get('/view',boardController.getView)

router.get('/modify',(req,res)=>{
    res.render('board/modify.html')
})

router.get('/write',(req,res)=>{
    res.render('board/write.html')
})


module.exports = router