import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideosEntity } from './videos.entity';
import { CreateVideosDto } from './dtos/create.videos';

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) public videoRepo: Repository<VideosEntity>) { }

    findAll() {
        return this.videoRepo.find({
            relations:{
                programs:true
            }
        });
    }

    async findOne(id: string) {
        const video = await this.videoRepo.find({
            relations:{
                programs:true
            },where:{id}
        })

        if (!video) {
            return new NotFoundException("video not found");
        }

        return video;
    }

    create(data: CreateVideosDto) {
        const video = this.videoRepo.create(data);

        return this.videoRepo.save(video);
    }

    async update(id: string,link:string,programs:any) {
        const video = await this.videoRepo.findOneBy({ id })
        if (!video) {
            return new NotFoundException("video not found");
        }
        video.link=link
        video.programs=programs

        return this.videoRepo.save(video)
    }

    async delete(id: string) {
        const video = await this.videoRepo.findOneBy({ id })
        if (!video) {
            return new NotFoundException("video not found");
        }
        return this.videoRepo.remove(video);
    }
}
