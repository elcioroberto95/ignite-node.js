import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoryUseCase } from "./ImportCategoriesUseCase";
import {categoriesRepository} from "../createCategories"
const importCategoriesUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);
export {
    importCategoriesUseCase, importCategoriesController

}