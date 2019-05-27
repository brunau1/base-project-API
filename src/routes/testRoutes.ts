import { Router } from 'express'
import test from '../controllers/TestController'

class Routes {
    router : Router

    constructor(){
        this.router = Router()
        this.router.get('/test', test.showMessage)
    }
}
export default new Routes().router