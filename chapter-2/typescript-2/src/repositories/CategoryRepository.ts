import { Category } from "../model/Category"

interface ICreateCategoryInterface {
    name: string;
    description: string;
}
class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryInterface): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
    list(): Category[] {
        return this.categories;
    }
    findByName(name: string): Category {
        const categoryExist = this.categories.find(categorie => categorie.name == name)
        return categoryExist
    }
}
export {
    CategoryRepository
}