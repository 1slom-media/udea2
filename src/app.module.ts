import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { BannersModule } from './banners/banners.module';
import { GaleryModule } from './galery/galery.module';
import { News } from './news/news.entity';
import { GaleryEntity } from './galery/galery.entity';
import { BannersEntity } from './banners/banners.entity';
import { VideosModule } from './videos/videos.module';
import { VideosEntity } from './videos/videos.entity';
import { ProgramsModule } from './programs/programs.module';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/category.entity';
import { ProgramsEntity } from './programs/programs.entity';
import { CategoryBannerModule } from './category_banner/category_banner.module';
import { CategoryBannerEntity } from './category_banner/category_banner';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [News,GaleryEntity,BannersEntity,VideosEntity,CategoryEntity,ProgramsEntity,CategoryBannerEntity],
      synchronize: true,
    }),
    NewsModule,
    BannersModule,
    GaleryModule,
    VideosModule,
    ProgramsModule,
    CategoryModule,
    CategoryBannerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
