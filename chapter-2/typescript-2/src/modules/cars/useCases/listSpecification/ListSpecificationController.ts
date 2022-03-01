import { Request, Response } from 'express';
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) { };
    handle(req: Request, res: Response): Response {
        try {
            const specifications = this.listSpecificationUseCase.execute();
            return res.status(200).json({
                "specifications": specifications
            })
        }
        catch (error) {
            res.status(500).json({
                "error": String(error).replace("Error: ", ""),
            })
        }
    }
}
export {
    ListSpecificationController
}