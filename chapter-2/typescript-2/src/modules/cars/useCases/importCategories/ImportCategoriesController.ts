import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCategoriesUseCase: ImportCategoryUseCase) { }

    handle(req: Request, res: Response): Response {
        const { file } = req
        this.importCategoriesUseCase.execute(file);
        return res.send();
    }
}
export {
    ImportCategoriesController
}