import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDtoNews {

    @ApiProperty()
    @IsString()
    banner_img: string;
 
    @ApiProperty()
    @IsString()
    date_time: string;

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
    description_uz: string

    @ApiProperty()
    @IsString()
    description_ru: string

    @ApiProperty()
    @IsString()
    description_en: string

    @ApiProperty()
    @IsString()
    image: string

    @ApiProperty()
    @IsString()
    title_uz2: string

    @ApiProperty()
    @IsString()
    title_ru2: string

    @ApiProperty()
    @IsString()
    title_en2: string

    @ApiProperty()
    @IsString()
    description_uz2: string

    @ApiProperty()
    @IsString()
    description_ru2: string

    @ApiProperty()
    @IsString()
    description_en2: string

    @ApiProperty()
    @IsString()
    title_uz3: string

    @ApiProperty()
    @IsString()
    title_ru3: string

    @ApiProperty()
    @IsString()
    title_en3: string

    @ApiProperty()
    @IsString()
    description_uz3: string

    @ApiProperty()
    @IsString()
    description_ru3: string

    @ApiProperty()
    @IsString()
    description_en3: string

    @ApiProperty()
    @IsString()
    image2: string

    @ApiProperty()
    @IsString()
    title_uz4: string

    @ApiProperty()
    @IsString()
    title_ru4: string

    @ApiProperty()
    @IsString()
    title_en4: string

    @ApiProperty()
    @IsString()
    description_uz4: string

    @ApiProperty()
    @IsString()
    description_ru4: string

    @ApiProperty()
    @IsString()
    description_en4: string

    @ApiProperty()
    @IsString()
    quote: string

    @ApiProperty()
    @IsString()
    full_name: string

    @ApiProperty()
    @IsString()
    link: string

}