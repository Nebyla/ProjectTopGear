var MongoClient = require('mongodb').MongoClient

const uri = "mongodb://localhost:27017/"
const client = new MongoClient(uri)
async function run() {
try {
await client.connect();
var database = client.db("TopGear");
database.dropDatabase()
database = client.db("TopGear");
const cats = database.collection("Gear");
const result = await cats.insertOne({name:"Кларксон"});
console.log(`${result} documents were inserted`);
} finally {
await client.close();
}
}
run()
