import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategories';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository'
const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();


categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});



categoriesRoutes.get('/', (req, res) => {

    return res.status(201).json({

    });
})
export {
    categoriesRoutes
}