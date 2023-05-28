import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";


@Entity({ name: "videos" })
export class VideosEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "varchar" })
    @IsString()
    category_uz: string

    @Column({ type: "varchar" })
    @IsString()
    category_ru: string

    @Column({ type: "varchar" })
    @IsString()
    category_en: string

    @Column({ type: "text",nullable:true })
    @IsString()
    link: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}