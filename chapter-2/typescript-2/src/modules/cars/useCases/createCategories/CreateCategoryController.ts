import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {

    }

    handle(req: Request, res: Response): Response {
        try {
            const { name, description } = req.body;
            this.createCategoryUseCase.execute({ name, description });
            return res.status(201).json({ message: "Category cadastrada com sucesso" })
        }
        catch (error) {

            error = String(error).replace("Error: ","");

            return res.status(501).json({
                error
            })
        }
    }
}
export {
    CreateCategoryController
}