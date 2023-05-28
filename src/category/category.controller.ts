import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create.category';
import { UpdateCategoryDto } from './dtos/update.category';

@ApiTags("category")
@Controller('category')
export class CategoryController {
    constructor(public categoryService:CategoryService){}

    @Get()
    findAll(){
        return this.categoryService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string ){
        return this.categoryService.findOne(id)
    }

    @Post()
    create(@Body() body:CreateCategoryDto){
        return this.categoryService.create(body)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body:UpdateCategoryDto){
        return this.categoryService.update(id,body.category_uz,body.category_en,body.category_ru);
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.categoryService.delete(id)
    }
}
