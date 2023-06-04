import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProgramsEntity } from './programs.entity';

@Injectable()
export class ProgramsService {
    constructor(@InjectRepository(ProgramsEntity) public programsRepo: Repository<ProgramsEntity>) { }

    findAll() {
        return this.programsRepo.find({
            relations: {
                category: true,
                videos:true
            }
        })
    }

    async findOne(id: string) {
        const programs = await this.programsRepo.find({
            relations: {
                category: true,
                videos:true
            }, where: { id }
        })

        if (!programs) {
            return new NotFoundException("new not found");
        }

        return programs;
    }

    create(body:any) {
        const programs = this.programsRepo.create(body)
        
        
        return this.programsRepo.save(programs)
    }

    async delete(id: string) {
        const programs = await this.programsRepo.findOneBy({ id })

        if (!programs) {
            return new NotFoundException("programs not found");
        }
        return this.programsRepo.remove(programs);
    }

    async update(id: string,banner_img:string , course_overview_uz:string ,course_overview_en:string,course_overview_ru:string , course_description_uz:string ,course_description_en:string,course_description_ru:string , content_title_uz:string ,content_title_en:string,content_title_ru:string , content_description_uz:string ,content_description_en:string,content_description_ru:string,completed_title_uz:string,completed_title_en:string,completed_title_ru:string,completed_description_uz:string,completed_description_ru:string,completed_description_en:string,date_uz:string,date_ru:string,date_en:string,date_description_uz:string,date_description_ru:string,date_description_en:string,year_uz:string,year_en:string,year_ru:string,year_description_uz:string,year_description_en:string,year_description_ru:string,language_uz:string ,language_en:string ,language_ru:string ,language_description_uz:string ,language_description_en:string ,language_description_ru:string ,moment_uz:string ,moment_en:string ,moment_ru:string ,moment_description_uz:string ,moment_description_en:string ,moment_description_ru:string ,price_uzs:string ,price_usd:string ,price_description_uz:string ,price_description_ru:string ,price_description_en:string,hero_title_uz:string,hero_title_ru:string,hero_title_en:string,hero_title2_en:string,hero_title2_ru:string,hero_title2_uz:string,hero_title3_en:string,hero_title3_ru:string,hero_title3_uz:string,main_title_en:string,main_title_uz:string,main_title_ru:string,category:any) {
        const programs = await this.programsRepo.findOneBy({ id })
        if (!programs) {
            return new NotFoundException("programs not found");
        }
        programs.banner_img=banner_img
        programs.course_overview_uz=course_overview_uz
        programs.course_overview_en=course_overview_en
        programs.course_overview_ru=course_overview_ru
        programs.course_description_uz=course_description_uz
        programs.course_description_en=course_description_en
        programs.course_description_ru=course_description_ru
        programs.content_title_uz=content_title_uz
        programs.content_title_en=content_title_en
        programs.content_title_ru=content_title_ru
        programs.content_description_uz=content_description_uz
        programs.content_description_en=content_description_en
        programs.content_description_ru=content_description_ru
        programs.completed_title_uz=completed_title_uz
        programs.completed_title_en=completed_title_en
        programs.completed_title_ru=completed_title_ru
        programs.completed_description_uz=completed_description_uz
        programs.completed_description_en=completed_description_en
        programs.completed_description_ru=completed_description_ru
        programs.date_uz=date_uz
        programs.date_en=date_en
        programs.date_ru=date_ru
        programs.date_description_uz=date_description_uz
        programs.date_description_en=date_description_en
        programs.date_description_ru=date_description_ru
        programs.year_uz=year_uz
        programs.year_en=year_en
        programs.year_ru=year_ru
        programs.year_description_uz=year_description_uz
        programs.year_description_en=year_description_en
        programs.year_description_ru=year_description_ru
        programs.language_uz=language_uz
        programs.language_en=language_en
        programs.language_ru=language_ru
        programs.language_description_uz=language_description_uz
        programs.language_description_en=language_description_en
        programs.language_description_ru=language_description_ru
        programs.moment_uz=moment_uz
        programs.moment_en=moment_en
        programs.moment_ru=moment_ru
        programs.moment_description_uz=moment_description_uz
        programs.moment_description_en=moment_description_en
        programs.moment_description_ru=moment_description_ru
        programs.price_description_uz=price_description_uz
        programs.price_description_en=price_description_en
        programs.price_description_ru=price_description_ru
        programs.price_uzs=price_uzs
        programs.price_usd=price_usd
        programs.category=category
        programs.banner_img=banner_img
        programs.hero_title_uz=hero_title_uz
        programs.hero_title_ru=hero_title_ru
        programs.hero_title_en=hero_title_en
        programs.hero_title2_uz=hero_title2_uz
        programs.hero_title2_ru=hero_title2_ru
        programs.hero_title2_en=hero_title2_en
        programs.hero_title3_uz=hero_title3_uz
        programs.hero_title3_ru=hero_title3_ru
        programs.hero_title3_en=hero_title3_en
        programs.main_title_uz=main_title_uz
        programs.main_title_ru=main_title_ru
        programs.main_title_en=main_title_en
        
        
        return this.programsRepo.save(programs)
    }
}
