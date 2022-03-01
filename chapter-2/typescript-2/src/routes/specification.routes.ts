import { Router } from 'express';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository'


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
        var string = JSON.stringify(error);
        console.log(string)
        res.status(404).json({
            error: JSON.stringify(error)
        })
    }
})
export {
    specificationRoutes
}
