var mongoose = require('mongoose')
const { Gears } = require('../models/gear')
mongoose.connect('mongodb://localhost/ProjectTopGear')
var Gear = require("./models/gear").Gear

var gears = new Gears({
    title: "Джереми Кларксон - телеведущий",
    nick: "Clarcson"
    })
    
    
    console.log(gears)
    gears.save(function(err, gears, affected){
        console.log(gears.title)
    })