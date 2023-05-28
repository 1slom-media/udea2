import { Module } from '@nestjs/common';
import { BannersController } from './banners.controller';
import { BannersService } from './banners.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannersEntity } from './banners.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BannersEntity])],
  controllers: [BannersController],
  providers: [BannersService]
})
export class BannersModule {}
