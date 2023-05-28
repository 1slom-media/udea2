import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GaleryService } from './galery.service';
import { CreateDtoGalery } from './dtos/create.galery';
import { UpdateDtoGalery } from './dtos/update.galery';

@ApiTags("galery")
@Controller('galery')
export class GaleryController {
    constructor(public galeryService:GaleryService){}

    @Get()
    findAll(){
        return this.galeryService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string ){
        return this.galeryService.findOne(id)
    }

    @Post()
    create(@Body() body:CreateDtoGalery){
        return this.galeryService.create(body)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body:UpdateDtoGalery){
        return this.galeryService.update(id,body.image,body.news);
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.galeryService.delete(id)
    }
}
