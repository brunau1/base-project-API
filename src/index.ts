import express, {Request, Response} from 'express'
import { config } from '../configurations/config'

const server = express()

server.listen(config.port, () => {
    console.log("server listening on port"+config.port+"...")
})