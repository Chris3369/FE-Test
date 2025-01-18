import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import studentRouter from './routes/student.route.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/students', studentRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server start at port:${process.env.PORT}`)
})