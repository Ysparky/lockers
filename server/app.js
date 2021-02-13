'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = require('express')()

global.XMLHttpRequest = require('xhr2')

app.set('views', path.join(__dirname, 'views'));

app.use(cors())
app.use(function (_, response, next) {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST')
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(bodyParser.json({ limit: '100mb' })) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    limit: '100mb',
    extended: true
  })
)

app.use(
  logger(
    ':date[iso] - :remote-addr ":method :url HTTP/:http-version" status::status :res[' +
      'content-length] bytes - :response-time \bms'
  )
)

// app.use('/api/', require('./api/controllers'))

module.exports = app
