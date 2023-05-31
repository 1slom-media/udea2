import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VideosService } from './videos.service';
import { CreateVideosDto} from './dtos/create.videos';
import { UpdateVideosDto } from './dtos/update.videos';


@ApiTags("videos")
@Controller('videos')
export class VideosController {
    constructor(public videoService:VideosService ){}

    @Get()
    findAll(){
        return this.videoService.findAll()
    }

    @Get(":id")
    findOne(@Param("id") id:string){
        return this.videoService.findOne(id)
    }

    @Post()
    create(@Body() body:CreateVideosDto){
        return this.videoService.create(body)
    }

    @Delete(":id")
    delete(@Param("id") id:string){
        return this.videoService.delete(id)
    }

    @Patch(":id")
    update(@Param("id") id:string, @Body() body:UpdateVideosDto){
        return this.videoService.update(id,body.link,body.programs);
    }
}
