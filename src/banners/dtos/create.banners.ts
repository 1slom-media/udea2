import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBannersDto{
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
    title_uz: string

    @ApiProperty()
    @IsString()
    title_ru: string

    @ApiProperty()
    @IsString()
    title_en: string

    @ApiProperty()
    @IsString()
    image: string

    @ApiProperty()
    @IsString()
    image2: string

    @ApiProperty()
    @IsString()
    image3: string

    @ApiProperty()
    @IsString()
    image4: string
}