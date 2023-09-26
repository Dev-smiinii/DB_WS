const express = require('express')
const app = express()
const pool = require('./pool')
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views',{
    express: app
})

app.use(express.urlencoded({extended: true}))

app.listen(3000, async()=>{
    console.log(`server start`)
    try{    
        const connection = await pool.getConnection()
        console.log('Connection to the database!')
        connection.release()
    } catch (e){
        console.log('DB Connection Error')
    }
})