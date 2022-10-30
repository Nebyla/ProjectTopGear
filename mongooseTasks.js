var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " Самая лучшая машина на планете это .....")
}

var Gear = mongoose.model('Gear', schema)

var Clarcson = new Gear({ name: 'Джереми Кларксон' })
Clarcson.save(function (err) {
    Clarcson.meow()
})

