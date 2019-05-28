import { Router } from 'express'
import { Request, Response } from 'express'
import testRoutes from '../routes/testRoutes'

class Routes {
    router : Router

    constructor(){
        this.router = Router()
        this.defineTesteRoutes()
    }

    defineTesteRoutes(){
        this.router.get('/', this.defaultPage)
        this.router.use('/', testRoutes)
    }
    defaultPage(req : Request, res : Response){
        res.send("This is an API route working...")
    }
}
export default new Routes().router