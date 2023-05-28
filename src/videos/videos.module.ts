import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosController } from './videos.controller';
import { VideosService } from './videos.service';
import { VideosEntity } from './videos.entity';

@Module({
  imports:[TypeOrmModule.forFeature([VideosEntity])],
  controllers: [VideosController],
  providers: [VideosService]
})
export class VideosModule {}
