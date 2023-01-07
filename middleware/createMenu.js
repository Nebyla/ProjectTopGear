var db = require("../mySQLConnect.js");


module.exports = function(req,res,next){
    res.locals.nav = []

    db.query(`SELECT * FROM gears`, (err, gears) => {  
        if(err) throw err
        res.locals.nav = gears
        next()
        
    })
}