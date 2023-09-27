const express = require('express')
const router = express.Router()
const userRouter = require('./user/user.route')
const boardRouter = require('./board/board.route')

router.get('/',(req,res)=>{
    res.render('index.html')
})

router.use('/users', userRouter)
router.use('/boards', boardRouter)


module.exports = router