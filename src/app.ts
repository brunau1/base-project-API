import express from 'express'

class ApplicationController {
    application : express.Application

    constructor(){
        this.application = express()
    }
}

export default new ApplicationController().application