import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCategoryBannerDto } from './dtos/create.category';
import { UpdateCategoryBannerDto } from './dtos/update.category';
import { CategoryBannerService } from './category_banner.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("category-banner")
@Controller('category-banner')
export class CategoryBannerController {
    constructor(public categoryService:CategoryBannerService){}

    @Get()
    findAll(){
        return this.categoryService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string ){
        return this.categoryService.findOne(id)
    }

    @Post()
    create(@Body() body:CreateCategoryBannerDto){
        return this.categoryService.create(body)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body:UpdateCategoryBannerDto){
        return this.categoryService.update(id,body.category_uz,body.category_en,body.category_ru);
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.categoryService.delete(id)
    }
}
