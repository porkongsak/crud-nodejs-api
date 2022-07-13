const express = require('express')
const cors = require('cors')
const connectDb = require('./db/connect')

const app = express(cors());

// Require  dotenv
require('dotenv').config();

// req router
const router = require('./routes/crud')


//const app = express(cors());
const port = 5000;

// middlewere
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control=Allow-Origin', '*');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
});

app.use(express.json()) // ทำให้อยู่ในรูปเเบบ json

// Route
app.use('/api/v1/crud', router)


// Connection
const start = async () => {
    try {
        await connectDb(process.env.MONGO_CONNECT);
        app.listen(port, (req, res) => {
            console.log('You are listening to port  : ', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
