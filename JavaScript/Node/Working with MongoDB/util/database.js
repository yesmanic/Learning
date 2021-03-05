const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const config = require('./config.json');

const mongoConnect = callback => {
    MongoClient.connect(`mongodb+srv://yesman:${config.password}@cluster0.qpcbs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect;