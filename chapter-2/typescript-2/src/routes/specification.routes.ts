import { Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'


const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();
const specificationService = new CreateSpecificationService(specificationRepository);
specificationRoutes.post('/', (req, res) => {
    const { name, description } = req.body
    try {
        specificationService.execute({ name, description })
        res.status(201).json({
            messsage: "Specification saved successfully"
        })
    }
    catch (error) {
        res.status(404).json({
            error
        })
    }
})
export {
    specificationRoutes
}
