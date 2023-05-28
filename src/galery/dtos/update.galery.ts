import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString} from "class-validator";
import { News } from "src/news/news.entity";

export class UpdateDtoGalery {
    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty()
    @IsNumber()
    news: News;
}