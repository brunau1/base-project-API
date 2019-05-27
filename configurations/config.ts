import ConfigInterface from '../src/models/ConfigInterface'
require('dotenv').config()

class Config implements ConfigInterface{
    environment: string    
    host: string
    port: string
    endpoint: string

    constructor(){
        this.environment = process.env.ENV || 'developement'
        this.host = process.env.HOST || 'localhost'
        this.port = process.env.PORT || '3003'
        this.endpoint = process.env.ENDPOINT || '/api/v1'
    }
}

export default new Config()
