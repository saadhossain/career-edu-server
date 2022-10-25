const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
app.use(cors())

const courses = require('./data/courses.json')

const blogs = require('./data/blogs.json')
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
//Get all blogs
app.get('/blogs', (req, res)=> {
    res.send(blogs)
})
//Get Single Blog
app.get('/blogs/:id', (req, res)=>{
    const requestID = req.params.id;
    const matchedblog = blogs.find(blog=> blog.id == requestID)
    res.send(matchedblog)
})

app.listen(port, ()=>{
    console.log('Career Edu Server running on port:', port);
})