import { Request, Response } from 'express';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
class CreateSpecificationController {
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { };

    handle(req: Request, res: Response): Response {

        try {
            const { name, description } = req.body
            this.createSpecificationUseCase.execute({ name, description })
            return res.status(201).json({ messsage: "Specification saved successfully" })
        }
        catch (error) {

            error = String(error).replace("Error: ", "");
            return res.status(500).json({
                error
            })
        }

    }
}
export {
    CreateSpecificationController
}