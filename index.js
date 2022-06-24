const awsServerlessExpress = require('aws-serverless-express')
const app = require('./src/server')
const server = awsServerlessExpress.createServer(app)

exports.handler = async (event, context) => awsServerlessExpress.proxy(server, event, context);
