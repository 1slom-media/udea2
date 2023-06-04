import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { News } from './news.entity';
import { Repository } from 'typeorm';
import { CreateDtoNews } from './dtos/create.news';

@Injectable()
export class NewsService {
    constructor(@InjectRepository(News) public newsRepo: Repository<News>) { }

    findAll() {
        return this.newsRepo.find({
            relations: {
                galery: true
            }
        })
    }

    async findOne(id: string) {
        const news = await this.newsRepo.find({
            relations: {
                galery: true
            }, where: { id }
        })

        if (!news) {
            return new NotFoundException("new not found");
        }

        return news;
    }

    create(data: CreateDtoNews) {
        const news = this.newsRepo.create(data)
        return this.newsRepo.save(news)
    }

    async delete(id: string) {
        const news = await this.newsRepo.findOneBy({ id })

        if (!news) {
            return new NotFoundException("news not found");
        }
        return this.newsRepo.remove(news);
    }

    async update(id: string, title_uz:string, title_en:string, title_ru:string, title_uz2:string, title_en2:string, title_ru2:string,title_uz3:string, title_en3:string, title_ru3:string,title_uz4:string, title_en4:string, title_ru4:string,description_uz:string,description_ru:string,description_en:string,description_uz2:string,description_ru2:string,description_en2:string,description_uz3:string,description_ru3:string,description_en3:string,description_uz4:string,description_ru4:string,description_en4:string,banner_img:string,date_time:string,image:string,image2:string,quote_uz:string,quote_ru:string,quote_en:string,full_name:string,link:string) {
        const news = await this.newsRepo.findOneBy({ id })
        if (!news) {
            return new NotFoundException("news not found");
        }
        news.title_uz=title_uz
        news.title_en=title_en
        news.title_ru=title_ru
        news.title_uz2=title_uz2
        news.title_en2=title_en2
        news.title_ru2=title_ru2
        news.title_uz3=title_uz3
        news.title_en3=title_en3
        news.title_ru3=title_ru3
        news.title_uz4=title_uz4
        news.title_en4=title_en4
        news.title_ru4=title_ru4
        news.description_uz=description_uz
        news.description_ru=description_ru
        news.description_en=description_en
        news.description_uz2=description_uz2
        news.description_ru2=description_ru2
        news.description_en2=description_en2
        news.description_uz3=description_uz3
        news.description_ru3=description_ru3
        news.description_en3=description_en3
        news.description_uz4=description_uz4
        news.description_ru4=description_ru4
        news.description_en4=description_en4
        news.banner_img=banner_img
        news.date_time=date_time
        news.image=image
        news.image2=image2
        news.quote_uz=quote_uz
        news.quote_en=quote_en
        news.quote_ru=quote_ru
        news.full_name=full_name
        news.link=link
        
        return this.newsRepo.save(news)
    }
}
