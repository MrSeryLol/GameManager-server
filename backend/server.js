import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


await mongoose.connect(process.env.DB_URL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  })