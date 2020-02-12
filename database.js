const mongoose = require('mongoose');

//  DB Config
const db = require('./config/keys').MongoURI;

// Connect to Mongo
class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(db, {useUnifiedTopology: true,useNewUrlParser: true})
        .then(() => console.log('MongoDB Connected...'))
        .catch(err=> console.log(err))
    }
};

module.exports =  new Database();