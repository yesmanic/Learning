const mongodb = require('mongodb');
const database = require('../util/database');

const ObjectId = mongodb.ObjectId;

class User {
    constructor(username, email) {
        this.username = username,
        this.email = email
    }

    save() {
        const db = database.getDb();
        return db
            .collection('users')
            .insertOne(this)
    }

    static findById(userId) {
        const db = database.getDb();
        return db
            .collection('users')
            .findOne({ _id: new ObjectId(userId) })
    }
}

module.exports = User;