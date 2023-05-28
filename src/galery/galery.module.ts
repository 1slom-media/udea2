import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GaleryEntity } from './galery.entity';
import { GaleryController } from './galery.controller';
import { GaleryService } from './galery.service';

@Module({
    imports:[TypeOrmModule.forFeature([GaleryEntity])],
    controllers:[GaleryController],
    providers:[GaleryService]
})
export class GaleryModule {}
