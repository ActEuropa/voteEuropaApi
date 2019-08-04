const express = require('express')
const settings = require('./settings')
const log = require('./lib/log').getInstance()

const app = express()
const expressSwagger = require('express-swagger-generator')(app)

const options = {
  swaggerDefinition: {
    info: {
      title: 'VoteEuropa',
      version: '1.0.0'
    },
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http']
  },
  basedir: __dirname,
  files: ['./routes/**/*.js']
}

const miscRoutes = require('./routes/misc')
const authRoutes = require('./routes/auth')

app.use((req, res, next) => {
  log.debug({
    call: req.originalUrl,
    method: req.method
  })
  next()
})

app.use(miscRoutes)
app.use(authRoutes)
expressSwagger(options)
const server = app.listen(settings.appPort, settings.appHost, () => {
  log.info(`server started at http://${settings.appHost}:${settings.appPort}`)
})

module.exports = server
