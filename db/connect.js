const mongoose = require('mongoose');



const connectDb = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser : true
    });
    
}
console.log('connectdb')
module.exports = connectDb