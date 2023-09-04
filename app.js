const express = require("express")
const cors = require('cors')
const app = express()

const dotenv = require('dotenv').config({path: __dirname + '/.env'})
const port = process.env.LISTEN_PORT ?? 3000
const apiPrefix = process.env.API_PREFIX ?? '/api/v1/'

app.use(cors())

if (dotenv.error) {
    throw dotenv.error
}

app.get(apiPrefix+'test', (req, res) => {

    res.json({status: 'success', message: 'Test uri success'})
})

app.get(apiPrefix+'no-test', (req, res) => {

    res.json({status: 'success', message: 'No test uri success'})
})

app.listen(port, () => {
    console.log('Server started')
})