import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';
import { ListSpecificationController } from "./ListSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);
export {
    specificationRepository,
    listSpecificationUseCase,
    listSpecificationController

}