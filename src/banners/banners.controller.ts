import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BannersService } from './banners.service';
import { CreateBannersDto } from './dtos/create.banners';
import { UpdateBannersDto } from './dtos/update.banners';


@ApiTags("banners")
@Controller('banners')
export class BannersController {
    constructor(public bannerService:BannersService ){}

    @Get()
    findAll(){
        return this.bannerService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return this.bannerService.findOne(id)
    }

    @Post()
    create(@Body() body:CreateBannersDto){
        return this.bannerService.create(body)
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.bannerService.delete(id)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body:UpdateBannersDto){
        return this.bannerService.update(id,body.image,body.image2,body.image3,body.image4,body.category_banner);
    }
}
