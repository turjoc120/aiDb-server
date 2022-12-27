import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import payment from "./routes/payment.js";


const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use('/uploads', express.static('uploads'))
app.use(cors())


app.use('/api/payment', payment)



const CONNECTION_URL = 'mongodb+srv://mujtaba:iy0NF9mz7WSRVbmg@cluster0.3rpzd78.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.PORT || 5000


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false)

