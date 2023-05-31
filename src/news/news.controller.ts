import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NewsService } from './news.service';
import { CreateDtoNews } from './dtos/create.news';
import { UpdateDtoNews } from './dtos/update.news';

@ApiTags('news')
@Controller('news')
export class NewsController {
    constructor(public newService:NewsService ){}

    @Get()
    findAll(){
        return this.newService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.newService.findOne(id);
    }

    @Post()
    create(@Body() body:CreateDtoNews){
        return this.newService.create(body)
    } 

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.newService.delete(id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() body:UpdateDtoNews ) {
        return this.newService.update(id, body.title_uz, body.title_en, body.title_ru, body.title_uz2, body.title_en2, body.title_ru2,body.title_uz3, body.title_en3, body.title_ru3,body.title_uz4, body.title_en4, body.title_ru4,body.description_uz,body.description_ru,body.description_en,body.description_uz2,body.description_ru2,body.description_en2,body.description_uz3,body.description_ru3,body.description_en3,body.description_uz4,body.description_ru4,body.description_en4,body.banner_img,body.date_time,body.image,body.image2,body.quote_uz,body.quote_ru,body.quote_en,body.full_name,body.link);
    }

}
