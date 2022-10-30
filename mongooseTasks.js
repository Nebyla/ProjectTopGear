var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var Gear = mongoose.model('Gear', { name: String })

var Clarcson = new Gear({ name: 'Джереми Кларксон' })
Clarcson.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Привет')
    }
})

