const express = require('express')
const app = express()
// const cors = require('cors');
const port = 5000

// app.use(cors());

const course = require('./data/course.json');
// const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/course', (req, res) => {
    res.send(course)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})