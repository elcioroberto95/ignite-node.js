
import { Specification } from "../../model/Specification";
import { ISpecificationRepository, ISpecificationRepositoryDTO } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];


    private static INSTANCE: SpecificationRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }
        return SpecificationRepository.INSTANCE
    }
    findByName(name: string): Specification {
        const specificationAlreadyExists = this.specifications.find(item => item.name == name);
        if (specificationAlreadyExists) {
            throw new Error("specification already exists");
        }

        return specificationAlreadyExists

    }
    list(): Specification[] {
        return this.specifications;
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