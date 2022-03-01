import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./createCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
const categoriesRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export {
    categoriesRepository,
    createCategoryUseCase,
    createCategoryController
}