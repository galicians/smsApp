var config = require('./config')
var utils = require('./utils')
var cradle = require('cradle')
var connection = new(cradle.Connection)(config.couchdb.url, config.couchdb.port, {
        auth:{username: config.couchdb.username, password: config.couchdb.password},
        cache: true})
var events = connection.database('events')