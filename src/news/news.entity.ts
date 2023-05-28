import { IsString } from "class-validator";
import { GaleryEntity } from "src/galery/galery.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity("news")
export class News{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "text",nullable:true })
    banner_img: string;
 
    @Column({ type: "varchar",nullable:true })
    date_time: string;

    @Column({ type: "varchar" })
    @IsString()
    title_uz: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru: string

    @Column({ type: "varchar" })
    @IsString()
    title_en: string

    @Column({ type: "text"})
    @IsString()
    description_uz: string

    @Column({ type: "text"})
    @IsString()
    description_ru: string

    @Column({ type: "text"})
    @IsString()
    description_en: string

    @Column({ type: "text"})
    @IsString()
    image: string

    @Column({ type: "varchar" })
    @IsString()
    title_uz2: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru2: string

    @Column({ type: "varchar" })
    @IsString()
    title_en2: string

    @Column({ type: "text"})
    @IsString()
    description_uz2: string

    @Column({ type: "text"})
    @IsString()
    description_ru2: string

    @Column({ type: "text"})
    @IsString()
    description_en2: string

    @Column({ type: "varchar" })
    @IsString()
    title_uz3: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru3: string

    @Column({ type: "varchar" })
    @IsString()
    title_en3: string

    @Column({ type: "text"})
    @IsString()
    description_uz3: string

    @Column({ type: "text"})
    @IsString()
    description_ru3: string

    @Column({ type: "text"})
    @IsString()
    description_en3: string

    @Column({ type: "text"})
    @IsString()
    image2: string

    @Column({ type: "varchar" })
    @IsString()
    title_uz4: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru4: string

    @Column({ type: "varchar" })
    @IsString()
    title_en4: string

    @Column({ type: "text"})
    @IsString()
    description_uz4: string

    @Column({ type: "text"})
    @IsString()
    description_ru4: string

    @Column({ type: "text"})
    @IsString()
    description_en4: string

    @Column({ type: "text"})
    @IsString()
    quote: string

    @Column({ type: "varchar", length:200})
    @IsString()
    full_name: string

    @Column({ type: "text",nullable:true})
    @IsString()
    link: string

    @OneToMany(()=>GaleryEntity,(galery)=>galery.news)
    galery:GaleryEntity[]

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

}