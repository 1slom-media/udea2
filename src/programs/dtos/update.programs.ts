import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsString } from "class-validator";
import { CategoryEntity } from "src/category/category.entity";

export class UpdateDtoPrograms {

    @ApiProperty()
    @IsString()
    banner_img: string;

    @ApiProperty()
    @IsString()
    main_title_uz:string

    @ApiProperty()
    @IsString()
    main_title_en:string

    @ApiProperty()
    @IsString()
    main_title_ru:string

    @ApiProperty()
    @IsString()
    course_overview_uz:string

    @ApiProperty()
    @IsString()
    course_overview_en:string

    @ApiProperty()
    @IsString()
    course_overview_ru:string

    @ApiProperty()
    @IsString()
    course_description_uz: string

    @ApiProperty()
    @IsString()
    course_description_ru: string

    @ApiProperty()
    @IsString()
    course_description_en: string

    @ApiProperty()
    @IsString()
    content_title_uz: string

    @ApiProperty()
    @IsString()
    content_title_ru: string

    @ApiProperty()
    @IsString()
    content_title_en: string

    @ApiProperty()
    @IsString()
    content_description_uz: string

    @ApiProperty()
    @IsString()
    content_description_ru: string

    @ApiProperty()
    @IsString()
    content_description_en: string

    @ApiProperty()
    @IsString()
    completed_title_uz: string

    @ApiProperty()
    @IsString()
    completed_title_ru: string

    @ApiProperty()
    @IsString()
    completed_title_en: string

    @ApiProperty()
    @IsString()
    completed_description_uz: string

    @ApiProperty()
    @IsString()
    completed_description_ru: string

    @ApiProperty()
    @IsString()
    completed_description_en: string

    @ApiProperty()
    @IsString()
    date_uz: string

    @ApiProperty()
    @IsString()
    date_en: string

    @ApiProperty()
    @IsString()
    date_ru: string

    @ApiProperty()
    @IsString()
    date_description_uz: string

    @ApiProperty()
    @IsString()
    date_description_ru: string

    @ApiProperty()
    @IsString()
    date_description_en: string

    @ApiProperty()
    @IsString()
    year_uz: string

    @ApiProperty()
    @IsString()
    year_en: string

    @ApiProperty()
    @IsString()
    year_ru: string

    @ApiProperty()
    @IsString()
    year_description_uz: string

    @ApiProperty()
    @IsString()
    year_description_ru: string

    @ApiProperty()
    @IsString()
    year_description_en: string

    @ApiProperty()
    @IsString()
    language_uz: string

    @ApiProperty()
    @IsString()
    language_en: string

    @ApiProperty()
    @IsString()
    language_ru: string

    @ApiProperty()
    @IsString()
    language_description_uz: string

    @ApiProperty()
    @IsString()
    language_description_ru: string

    @ApiProperty()
    @IsString()
    language_description_en: string

    @ApiProperty()
    @IsString()
    moment_uz: string

    @ApiProperty()
    @IsString()
    moment_en: string

    @ApiProperty()
    @IsString()
    moment_ru: string

    @ApiProperty()
    @IsString()
    moment_description_uz: string

    @ApiProperty()
    @IsString()
    moment_description_ru: string

    @ApiProperty()
    @IsString()
    moment_description_en: string

    @ApiProperty()
    @IsString()
    price_uzs: string

    @ApiProperty()
    @IsString()
    price_usd: string

    @ApiProperty()
    @IsString()
    price_description_uz: string

    @ApiProperty()
    @IsString()
    price_description_ru: string

    @ApiProperty()
    @IsString()
    price_description_en: string

    @ApiProperty()
    @IsString()
    hero_title_uz: string

    @ApiProperty()
    @IsString()
    hero_title_ru: string

    @ApiProperty()
    @IsString()
    hero_title_en: string

    @ApiProperty()
    @IsString()
    hero_title2_uz: string

    @ApiProperty()
    @IsString()
    hero_title2_ru: string

    @ApiProperty()
    @IsString()
    hero_title2_en: string

    @ApiProperty()
    @IsString()
    hero_title3_uz: string

    @ApiProperty()
    @IsString()
    hero_title3_ru: string

    @ApiProperty()
    @IsString()
    hero_title3_en: string

    @ApiProperty()
    @Allow()
    category:CategoryEntity
}