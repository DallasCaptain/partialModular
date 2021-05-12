const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb://localhost/tattoos', {useNewUrlParser: true});

app.use(express.json({extended:true}))

require('./server/config/routes')(app)


app.listen(8000,()=>{
    console.log('listening yo')
})