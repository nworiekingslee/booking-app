const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors  = require('cors');
const app = express();

app.use(cors({ 
    origin: ["http://localhost:5173"],
    credentials: true
    }
))
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_URL)

app.post('/register', (req, res) => {
    const {name, email, password} = req.body
    
    res.json({
        name,
        email,
        password,
    })
})

app.listen(3000, () => console.log("Server listening on port 3000"))
