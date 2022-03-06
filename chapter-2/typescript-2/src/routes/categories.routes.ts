import { response, Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategories';
import { ImportCategoriesController } from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
const categoriesRoutes = Router();
const upload = multer({
    dest: "./temp"
})



categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res);
});



categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res);
})


categoriesRoutes.post('/import', upload.single("file"), (req, res) => {
    
})
export {
    categoriesRoutes
}