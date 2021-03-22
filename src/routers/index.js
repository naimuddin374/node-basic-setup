const path = require('path')
const dashboardRouter = require('./dashboardRouter')



const routes = [
    {
        path: '/api/dashboard',
        handler: dashboardRouter
    },
    {
        path: '/',
        handler: (req, res) => {
            res.sendFile(path.resolve(__dirname, '../../', 'client', 'build', 'index.html'))
        }
    },
    {
        path: '/',
        handler: (req, res) => res.send({ response: "Welcome our app" }).status(200)
    },
    {
        path: '*',
        handler: (req, res) => res.send({ response: "404 Page Not Found!" }).status(200)
    }
]


module.exports = app => {
    routes.forEach(r => {
        app.use(r.path, r.handler)
    })
}