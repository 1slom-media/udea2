import { Module } from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramsEntity } from './programs.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProgramsEntity])],
  controllers: [ProgramsController],
  providers: [ProgramsService]
})
export class ProgramsModule {}
