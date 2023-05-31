import { ApiProperty } from "@nestjs/swagger";
import { Allow, IsString} from "class-validator";
import { News } from "src/news/news.entity";

export class CreateDtoGalery {
    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty()
    @Allow()
    news: News;
}