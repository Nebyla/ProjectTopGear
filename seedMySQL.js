var mysql = require('mysql2');


var drop = 'TRUNCATE TABLE gears;'
var seedQuery = 'INSERT INTO gears (title, nick, avatar, about) VALUES ("Ричард Хамонд", "Hamond", "images/Hamond.jpg", "Английский телеведущий, наиболее известен по телепередачам «Top Gear»"),("Джереми Кларксон", "Clarcson", "images/clarkson.jpg","Дже́реми Чарльз Ро́берт Кларксон - английский телеведущий, фермер и журналист, специализирующийся на автомобильной тематике Широко известен как ведущий телевизионных шоу «Top Gear», получившего премию «Эмми» в 2005 году."),("Джеймс Мей", "Mey", "images/Mey.jpg", "Английский журналист, известный как один из ведущих телепередач Top Gear");'



var connection = mysql.createConnection({
host : '127.0.0.1',
port: '3306',
user : 'root',
password : 'root',
database: 'topgear'
});
connection.connect()



console.log("Running SQL seed...")


// Drop content
connection.query(drop, err => {
if (err) {
throw err
}
// Seed content
connection.query( seedQuery, err => {
if (err) {
throw err
}
console.log("SQL seed completed!")
connection.end()
})
})
