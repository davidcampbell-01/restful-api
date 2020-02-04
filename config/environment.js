const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/restful-api'
const secret = process.env.SECRET || 'The only way is up, babyyy!'

module.exports = { port, dbURI, secret }