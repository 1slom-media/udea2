import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto } from './dtos/create.category';

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(CategoryEntity) public categoryRepo: Repository<CategoryEntity>) { }

    findAll() {
        return this.categoryRepo.find({
            relations: {
                programs: true
            }
        });
    }

    async findOne(id: string) {
        const category = await this.categoryRepo.find({
            relations: {
                programs: true
            }, where: { id }
        })

        if (!category) {
            return new NotFoundException("category not found");
        }

        return category;
    }

    create(data:CreateCategoryDto) {
        const category = this.categoryRepo.create(data);

        return this.categoryRepo.save(category);
    }

    async update(id: string, category_uz: string,category_en: string,category_ru: string,) {
        const category = await this.categoryRepo.findOneBy({ id })
        if (!category) {
            return new NotFoundException("category not found");
        }

        category.category_uz = category_uz,
        category.category_en = category_en,
        category.category_ru = category_ru
        
        return this.categoryRepo.save(category)
    }

    async delete(id: string) {
        const category = await this.categoryRepo.findOneBy({ id })
        if (!category) {
            return new NotFoundException("category not found");
        }
        return this.categoryRepo.remove(category);
    }
}
