import { Request, Response } from 'express'

class TesteController{
    showMessage(req : Request, res : Response) : void {
        res.send("This is an API route working...")
    }
}
export default new TesteController()