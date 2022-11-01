var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
var Gear = require("./models/gear").Gear

var gear = new Gear({
    title: "Джереми Кларксон - телеведущий",
    nick: "Clarcson"
    })
    
    
    console.log(gear)
    gear.save(function(err, gear, affected){
        console.log(gear.title)
    })