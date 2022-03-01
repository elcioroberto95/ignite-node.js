import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {

    constructor(private specificationRepository: ISpecificationRepository) { }
    execute({ name, description }: IRequest): void {


        if (this.specificationRepository.findByName(name)) {
            throw new Error("Specification already exists")
        }
        else {
            this.specificationRepository.create({ name, description });
        }

    }
}
export {
    CreateSpecificationService
}