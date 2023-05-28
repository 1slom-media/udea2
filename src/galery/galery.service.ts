import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GaleryEntity } from './galery.entity';
import { Repository } from 'typeorm';
import { CreateDtoGalery } from './dtos/create.galery';

@Injectable()
export class GaleryService {
    constructor(@InjectRepository(GaleryEntity) public galeryRepo: Repository<GaleryEntity>) { }

    findAll() {
        return this.galeryRepo.find({
            relations: {
                news: true
            }
        });
    }

    async findOne(id: string) {
        const galery = await this.galeryRepo.find({
            relations: {
                news: true
            }, where: { id }
        })

        if (!galery) {
            return new NotFoundException("galery not found");
        }

        return galery;
    }

    create(data: CreateDtoGalery) {
        const galery = this.galeryRepo.create(data);

        return this.galeryRepo.save(galery);
    }

    async update(id: string, image: string, news: any) {
        const galery = await this.galeryRepo.findOneBy({ id })
        if (!galery) {
            return new NotFoundException("galery not found");
        }

        galery.image = image
        galery.news = news
        return this.galeryRepo.save(galery)
    }

    async delete(id: string) {
        const galery = await this.galeryRepo.findOneBy({ id })
        if (!galery) {
            return new NotFoundException("galery not found");
        }
        return this.galeryRepo.remove(galery);
    }

}
