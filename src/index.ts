import express, {Request, Response} from 'express'

const server = express()

server.listen(3003, () => {
    console.log("server listening on port 3003...")
})