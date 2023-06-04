import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsString } from "class-validator";
import { CategoryBannerEntity } from "src/category_banner/category_banner";

export class UpdateBannersDto{

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

    @ApiProperty()
    @Allow()
    category_banner:CategoryBannerEntity
}