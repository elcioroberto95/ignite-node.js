import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./ICategoryRepository";

class PostgressCategoryRepository implements ICategoryRepository {
    findByName(name: string): Category {
        console.log("a implementar")
        return null
    }
    list(): Category {
        console.log("a implementar")
        return null
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log("a implementar")
    }

}