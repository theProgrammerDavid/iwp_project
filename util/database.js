let mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'iwp_project';

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(process.env.MONGO_URL+'/'+database, {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
        })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()