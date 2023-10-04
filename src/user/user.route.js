const express = require('express')
const router = express.Router()

router.get('/login',(req,res)=>{
    res.render('user/login.html')
})

router.get('/join', (req,res)=>{
    res.render('user/join.html')
})

router.post('/login' ,(req,res)=>{
    res.render('board/list.html')
})



module.exports = router