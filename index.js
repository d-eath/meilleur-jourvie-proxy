import 'dotenv/config'

import cors from 'cors-anywhere'
import http from 'http'

const { BASE_URL, PORT } = process.env

const corsServer = cors.createServer()

const httpServer = http.createServer((req, res) => {
    req.url = '/' + BASE_URL + req.url

    corsServer.emit('request', req, res)
})

httpServer.listen(PORT)