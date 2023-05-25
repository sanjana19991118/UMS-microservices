const express = require('express')
const app = express()
const configureDB = require('./config/database')
// const router = require('./config/routes')
const port = 3082

configureDB()
app.use(express.json())
// app.use(router)

app.listen(port,()=>{
    console.log('Server Running On Port',port)
})