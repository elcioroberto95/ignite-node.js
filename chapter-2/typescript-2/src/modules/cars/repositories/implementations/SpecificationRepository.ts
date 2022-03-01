
import { Specification } from "../../model/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    constructor() {
        this.specifications = [];
    }

    findByName(name: string): Specification {
        const specificationAlreadyExists = this.specifications.find(item => item.name == name);
        if (specificationAlreadyExists) {
            throw new Error("specification already exists");
        }

        return specificationAlreadyExists

    }
    list(): Specification[] {
        throw new Error("Method not implemented.");
    }
    create({ name, description }: ISpecificationRepositoryDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name, description, created_at: new Date()
        })
        this.specifications.push(specification);
    }



}
export {
    SpecificationRepository
}