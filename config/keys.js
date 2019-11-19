
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = {useNewUrlParser: true};

module.exports = { 
    MongoURI: uri
}