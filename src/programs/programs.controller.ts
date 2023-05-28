import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProgramsService } from './programs.service';
import { CreateDtoPrograms } from './dtos/create.programs';
import { UpdateDtoPrograms } from './dtos/update.programs';

@ApiTags("programs")
@Controller('programs')
export class ProgramsController {
    constructor(public programsService:ProgramsService ){}

    @Get()
    findAll(){
        return this.programsService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.programsService.findOne(id);
    }

    @Post()
    create(@Body() body:CreateDtoPrograms){
        return this.programsService.create(body)
    } 

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.programsService.delete(id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body:UpdateDtoPrograms ) {
        return this.programsService.update(id,  body.banner_img , body.course_overview_uz ,body.course_overview_en,body.course_overview_ru , body.course_description_uz ,body.course_description_en,body.course_description_ru , body.content_title_uz ,body.content_title_en,body.content_title_ru , body.content_description_uz ,body.content_description_en,body.content_description_ru,body.completed_title_uz,body.completed_title_en,body.completed_title_ru,body.completed_description_uz,body.completed_description_ru,body.completed_description_en,body.date_uz,body.date_ru,body.date_en,body.date_description_uz,body.date_description_ru,body.date_description_en,body.year_uz,body.year_en,body.year_ru,body.year_description_uz,body.year_description_en,body.year_description_ru,body.language_uz ,body.language_en ,body.language_ru ,body.language_description_uz ,body.language_description_en ,body.language_description_ru ,body.moment_uz ,body.moment_en ,body.moment_ru ,body.moment_description_uz ,body.moment_description_en ,body.moment_description_ru ,body.price_uzs ,body.price_usd ,body.price_description_uz ,body.price_description_ru ,body.price_description_en,body.category);
    }
}
