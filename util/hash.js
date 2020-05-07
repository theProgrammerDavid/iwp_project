const bcrypt = require('bcrypt');

async function hashPassword(pass) {

    let password = pass;
    let saltRounds = 10;
    
    //Note: Never define a constant salt in the source file
    const salt = '$2b$10$GA94lFm2QPNNF80uz6UMFu';
    const hash = await bcrypt.hash(password, salt);
    return hash
}

module.exports.hashPassword = hashPassword;