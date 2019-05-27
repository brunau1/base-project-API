import { Router } from 'express'
import testRoutes from '../routes/testRoutes'

class Routes {
    router : Router

    constructor(){
        this.router = Router()
        this.defineTesteRoutes()
    }

    defineTesteRoutes(){
        this.router.use('/', testRoutes)
    }
}
export default new Routes().router