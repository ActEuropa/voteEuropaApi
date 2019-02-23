module.exports = {
  logLevel: process.env.LOG_LEVEL || 'debug',
  appPort: process.env.APP_PORT || 80,
  appHost: process.env.APP_HOST || '0.0.0.0'
}
