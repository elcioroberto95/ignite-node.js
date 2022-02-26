import { Router } from 'express';
import { v4 as uuidV4, v4 } from 'uuid'
import { Category } from '../model/Category';
import { CategoryRepository } from '../repositories/CategoryRepository';
const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body;
    if(!categories.findByName(name)){
        categories.create({ name, description });
        return res.status(201).send();
    }
    else {
        return res.status(403).json({
            "error":"Category already exists"
        });
    }
    
})

categoriesRoutes.get('/', (req, res) => {
    const listCategories = categories.list();
    return res.status(201).json({
        data: categories
    });
})
export {
    categoriesRoutes
}