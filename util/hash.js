const bcrypt = require('bcrypt');

async function hashPassword(req) {

    let password = req.body.password;
    let saltRounds = 10;

    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err) reject(err)
            resolve(hash)
        });
    })

    return hashedPassword
}

module.exports.hashPassword = hashPassword;