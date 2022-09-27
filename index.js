import 'dotenv/config'

import cors from 'cors-anywhere'
import http from 'http'

const { BASE_URL, ORIGIN, PORT } = process.env

const corsServer = cors.createServer({
    originWhitelist: [ORIGIN]
})

const httpServer = http.createServer((req, res) => {
    req.url = '/' + BASE_URL + req.url

    corsServer.emit('request', req, res)
})

httpServer.listen(PORT)