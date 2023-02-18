require('dotenv').config()

const express = require('express')
const examRoutes = require('./routes/exams')

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/exams', examRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
