import { ICategoryRepository } from "../../repositories/ICategoryRepository";
interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoryRepository: ICategoryRepository) { }
    execute({ name, description }: IRequest): void {

        if (this.categoryRepository.findByName(name)) {
            throw new Error("Category already exists");

        }
        else {
            this.categoryRepository.create({ name, description });
        }
    }
}
export {
    CreateCategoryUseCase
}