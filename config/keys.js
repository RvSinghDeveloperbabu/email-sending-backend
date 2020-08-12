
if (process.env.NODE_ENV === 'production'){
    // use production keys
    module.exports = require('./production_keys')
}else{
    // use development keys
    module.exports =require('./dev')
}

// cIDgoogle= 298894517177-p93f11ok59irp55pjnfrqu470ctsltuo.apps.googleusercontent.com
// secretgoogle= DmCBJnAO-Qb6flPJQJ7Q3ZE-