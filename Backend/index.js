const connectToMongo = require('./db')
const express = require('express')
const app = express()

connectToMongo();

const port = 5000

app.use(express.json())

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
// app.get('/', (req, res) => {
//     res.send('Hello Abdullah')
// })

// app.get('/api/v1/login', (req, res) => {
//     res.send('Hello Login')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})