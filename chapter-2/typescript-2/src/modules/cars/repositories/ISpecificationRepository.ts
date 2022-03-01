import { Specification } from "../model/Specification";

interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}
interface ISpecificationRepository {
    findByName(name: string): Specification;
    list(): Specification[];
    create({ name, description }: ISpecificationRepositoryDTO): void
}
export {
    ISpecificationRepository, ISpecificationRepositoryDTO
}