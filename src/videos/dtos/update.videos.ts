import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateVideosDto{
    @ApiProperty()
    @IsString()
    category_uz: string

    @ApiProperty()
    @IsString()
    category_ru: string

    @ApiProperty()
    @IsString()
    category_en: string

    @ApiProperty()
    @IsString()
    link:string
}