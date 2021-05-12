const Tattoos = require('../controllers/tattoos')


module.exports = function(app){

    app.get('/',(req,res)=>{
        Tattoos.index(req,res)
    })

    app.get('/goodbye',(req,res)=>{
        Tattoos.logout(req,res)
    })
}