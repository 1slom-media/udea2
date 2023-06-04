import { Module } from '@nestjs/common';
import { CategoryBannerController } from './category_banner.controller';
import { CategoryBannerService } from './category_banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryBannerEntity } from './category_banner';

@Module({
  imports:[TypeOrmModule.forFeature([CategoryBannerEntity])],
  controllers: [CategoryBannerController],
  providers: [CategoryBannerService]
})
export class CategoryBannerModule {}
