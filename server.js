require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
 
mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.on('open', () => console.log('Connected to Database'))

app.use(express.json())

const masterclassRouter = require('./routes/masterclass_project')
app.use('/masterclass_project', masterclassRouter )


app.listen(3000, () => console.log('Server Started'))