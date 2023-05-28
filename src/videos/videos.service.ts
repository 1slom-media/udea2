import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideosEntity } from './videos.entity';
import { CreateVideosDto } from './dtos/create.videos';

@Injectable()
export class VideosService {
    constructor(@InjectRepository(VideosEntity) public videoRepo: Repository<VideosEntity>) { }

    findAll() {
        return this.videoRepo.find({});
    }

    async findOne(id: string) {
        const video = await this.videoRepo.findBy({id})

        if (!video) {
            return new NotFoundException("video not found");
        }

        return video;
    }

    create(data: CreateVideosDto) {
        const video = this.videoRepo.create(data);

        return this.videoRepo.save(video);
    }

    async update(id: string,category_uz: string,category_en: string,category_ru: string,link:string ) {
        const video = await this.videoRepo.findOneBy({ id })
        if (!video) {
            return new NotFoundException("video not found");
        }

        video.category_uz=category_uz
        video.category_en=category_en
        video.category_ru=category_ru
        video.link=link

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
