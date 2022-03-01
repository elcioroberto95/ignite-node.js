import { Router } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';
const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categories);

    try {
        createCategoryService.execute({ name, description });
        res.status(201).json({
            message: "Category cadastrada com sucesso"
        })
    }
    catch (error) {
        res.status(500).json({
            error
        })
    }

})

categoriesRoutes.get('/', (req, res) => {
    const listCategories = categories.list();
    return res.status(201).json({
        data: listCategories
    });
})
export {
    categoriesRoutes
}