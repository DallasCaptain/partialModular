const mongoose = require('mongoose')

const TattooSchema = new mongoose.Schema({
    graphic:String,
    color:Boolean
})

const Tattoo = mongoose.model('Tattoo',TattooSchema)


module.exports = {
    Tattoo:Tattoo,
    TattooSchema:TattooSchema

}