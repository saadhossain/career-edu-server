const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
app.use(cors())

const courses = require('./data/courses.json')

//Get server info on default url
app.get('/', (req, res)=>{
    res.send('Career Edu Server is Running')
})
//Get courses data from the server
app.get('/courses', (req, res)=>{
    res.send(courses);
})
//Get Single Course from the server
app.get('/courses/:id', (req, res)=>{
    const requestId = req.params.id;
    const matchedCourse = courses.find(course => course.id == requestId)
    res.send(matchedCourse)
})

app.listen(port, ()=>{
    console.log('Career Edu Server running on port:', port);
})