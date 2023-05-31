import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsString } from "class-validator";
import { ProgramsEntity } from "src/programs/programs.entity";

export class CreateVideosDto{
    @ApiProperty()
    @IsString()
    link:string

    @ApiProperty()
    @Allow()
    programs:ProgramsEntity
}