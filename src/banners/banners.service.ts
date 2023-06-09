import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BannersEntity } from './banners.entity';
import { CreateBannersDto } from './dtos/create.banners';

@Injectable()
export class BannersService {
    constructor(@InjectRepository(BannersEntity) public bannerRepo: Repository<BannersEntity>) { }

    findAll() {
        return this.bannerRepo.find({
            relations:{
                category_banner:true
            }
        });
    }

    async findOne(id: string) {
        const banner = await this.bannerRepo.find({
            relations:{
                category_banner:true
            },where:{id}
        })

        if (!banner) {
            return new NotFoundException("banner not found");
        }

        return banner;
    }

    create(data: CreateBannersDto) {
        const banner = this.bannerRepo.create(data);

        return this.bannerRepo.save(banner);
    }

    async update(id: string, image: string,image2: string,image3: string,image4: string,category_banner:any ) {
        const banner = await this.bannerRepo.findOneBy({ id })
        if (!banner) {
            return new NotFoundException("banner not found");
        }

        banner.image=image
        banner.image2=image2
        banner.image3=image3
        banner.image4=image4
        banner.category_banner=category_banner

        return this.bannerRepo.save(banner)
    }

    async delete(id: string) {
        const banner = await this.bannerRepo.findOneBy({ id })
        if (!banner) {
            return new NotFoundException("banner not found");
        }
        return this.bannerRepo.remove(banner);
    }
}
