import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoryRepository } from '../../repositories/ICategoryRepository';

interface IImportCategory {
    name: string;
    description: string;
}
class ImportCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository) { }


    async loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parseFile = parse();

            const categories: IImportCategory[] = [];
            stream.pipe(parseFile);
            parseFile.on("data", async (line) => {
                var [name, description] = line;
                var category = { name, description };
                categories.push(category);
            })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (error) => {
                    reject(error);
                })

        })
    }
    async execute(file: Express.Multer.File): Promise<void> {

        const categories = await this.loadCategories(file);
        categories.map((category) => {
            const { name, description } = category;
            const existsCategory = this.categoryRepository.findByName(name);
            if (!existsCategory) {
                this.categoryRepository.create(category);
            }
        })
    }
}
export {
    ImportCategoryUseCase
}