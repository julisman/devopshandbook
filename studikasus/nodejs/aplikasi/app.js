/*
 * author : agung.julisman@yahoo.com
 *
 * */
'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const logger = require('morgan')

const app = express()

// middleware
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

    // for security disable the X-Powered-By header
app.disable('x-powered-by')


// GET method route
app.get('/',  (req, res) => {
  res.send('Hello world')
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
// no stacktraces leaked to user unless in development environment
app.use((err, req, res, next) => {
    res.status(err.status || 500)
        .send({
            message: err.message,
            code: err.code || 0
        })
})


/*create server http or https*/
const server = require('http').createServer(app);


/*
 |--------------------------------------------------------------------------
 | Start the Server
 | !module.parent === avoid error Uncaught error outside test suite:
 |--------------------------------------------------------------------------
 */
if (!module.parent) {
    server.listen(9000, () => {
        console.log('Express server listening on port 9000!')
    })
}

module.exports = app