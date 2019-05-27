import express, { Request, Response } from 'express'
import config from '../configurations/config'
import routes from './routes/routes'

class ApplicationController {
    application : express.Application

    constructor(){
        this.application = express()
        this.defineAppRoutes()
    }

    defineAppRoutes(){
        this.application.use(config.endpoint, routes)
    }
}

export default new ApplicationController().application