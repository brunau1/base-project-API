import { Router } from 'express'
import teste from '../controllers/TesteController'

class Routes {
    router : Router

    constructor(){
        this.router = Router()
        this.router.get('/teste', teste.showMessage)
    }
}
export default new Routes().router