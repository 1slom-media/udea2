import { IsString } from "class-validator";
import { CategoryEntity } from "src/category/category.entity";
import { VideosEntity } from "src/videos/videos.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";


@Entity("programs")
export class ProgramsEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "text",nullable:true })
    banner_img: string;

    @Column({type:"varchar"})
    @IsString()
    course_overview_uz:string

    @Column({type:"varchar"})
    @IsString()
    course_overview_en:string

    @Column({type:"varchar"})
    @IsString()
    course_overview_ru:string

    @Column({ type: "text"})
    @IsString()
    course_description_uz: string

    @Column({ type: "text"})
    @IsString()
    course_description_ru: string

    @Column({ type: "text"})
    @IsString()
    course_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    content_title_uz: string

    @Column({ type: "varchar" })
    @IsString()
    content_title_ru: string

    @Column({ type: "varchar" })
    @IsString()
    content_title_en: string

    @Column({ type: "text"})
    @IsString()
    content_description_uz: string

    @Column({ type: "text"})
    @IsString()
    content_description_ru: string

    @Column({ type: "text"})
    @IsString()
    content_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    completed_title_uz: string

    @Column({ type: "varchar" })
    @IsString()
    completed_title_ru: string

    @Column({ type: "varchar" })
    @IsString()
    completed_title_en: string

    @Column({ type: "text"})
    @IsString()
    completed_description_uz: string

    @Column({ type: "text"})
    @IsString()
    completed_description_ru: string

    @Column({ type: "text"})
    @IsString()
    completed_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    date_uz: string

    @Column({ type: "varchar" })
    @IsString()
    date_en: string

    @Column({ type: "varchar" })
    @IsString()
    date_ru: string

    @Column({ type: "text"})
    @IsString()
    date_description_uz: string

    @Column({ type: "text"})
    @IsString()
    date_description_ru: string

    @Column({ type: "text"})
    @IsString()
    date_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    year_uz: string

    @Column({ type: "varchar" })
    @IsString()
    year_en: string

    @Column({ type: "varchar" })
    @IsString()
    year_ru: string

    @Column({ type: "text"})
    @IsString()
    year_description_uz: string

    @Column({ type: "text"})
    @IsString()
    year_description_ru: string

    @Column({ type: "text"})
    @IsString()
    year_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    language_uz: string

    @Column({ type: "varchar" })
    @IsString()
    language_en: string

    @Column({ type: "varchar" })
    @IsString()
    language_ru: string

    @Column({ type: "text"})
    @IsString()
    language_description_uz: string

    @Column({ type: "text"})
    @IsString()
    language_description_ru: string

    @Column({ type: "text"})
    @IsString()
    language_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    moment_uz: string

    @Column({ type: "varchar" })
    @IsString()
    moment_en: string

    @Column({ type: "varchar" })
    @IsString()
    moment_ru: string

    @Column({ type: "text"})
    @IsString()
    moment_description_uz: string

    @Column({ type: "text"})
    @IsString()
    moment_description_ru: string

    @Column({ type: "text"})
    @IsString()
    moment_description_en: string

    @Column({ type: "varchar" })
    @IsString()
    price_uzs: string

    @Column({ type: "varchar" })
    @IsString()
    price_usd: string

    @Column({ type: "text"})
    @IsString()
    price_description_uz: string

    @Column({ type: "text"})
    @IsString()
    price_description_ru: string

    @Column({ type: "text"})
    @IsString()
    price_description_en: string

    @Column({ type: "text"})
    @IsString()
    hero_title_uz: string

    @Column({ type: "text"})
    @IsString()
    hero_title_ru: string

    @Column({ type: "text"})
    @IsString()
    hero_title_en: string

    @Column({ type: "text"})
    @IsString()
    hero_title2_uz: string

    @Column({ type: "text"})
    @IsString()
    hero_title2_ru: string

    @Column({ type: "text"})
    @IsString()
    hero_title2_en: string

    @Column({ type: "text"})
    @IsString()
    hero_title3_uz: string

    @Column({ type: "text"})
    @IsString()
    hero_title3_ru: string

    @Column({ type: "text"})
    @IsString()
    hero_title3_en: string

    @ManyToOne(()=>CategoryEntity,(category)=>category.programs,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn()
    category:CategoryEntity

    @OneToMany(()=>VideosEntity,(videos)=>videos.programs,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    videos:VideosEntity[]

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

}