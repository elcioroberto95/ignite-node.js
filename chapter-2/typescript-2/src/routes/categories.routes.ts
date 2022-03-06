import { response, Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/cars/useCases/createCategories';
import { importCategoriesController } from '../modules/cars/useCases/importCategories';
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
    console.log("oi")
    return importCategoriesController.handle(req, res);
})
export {
    categoriesRoutes
}