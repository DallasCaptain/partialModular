const {Tattoo} = require('../models/tattoo')

module.exports ={
    index:(req,res)=>{
        Tattoo.find()
        .then(tattoos=>{
            res.json(tattoos)

        })
        .catch(err=>{console.log(err)})

    },

    logout:(req,res)=>{
        res.send('goodbye')
    },
}