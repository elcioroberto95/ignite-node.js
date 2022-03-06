import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoryUseCase } from "./ImportCategoriesUseCase";
const importCategoriesUseCase = new ImportCategoryUseCase();
const importCategoriesController = new ImportCategoriesController(importCategoriesUseCase);