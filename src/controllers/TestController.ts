import { Request, Response } from 'express'

class TestController{
    showMessage(req : Request, res : Response) : void {
        res.send("This is another API route working...")
    }
}
export default new TestController()