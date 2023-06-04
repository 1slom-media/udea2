import { IsString } from "class-validator";
import { CategoryBannerEntity } from "src/category_banner/category_banner";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";


@Entity({ name: "banners" })
export class BannersEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "varchar" })
    @IsString()
    title_uz: string

    @Column({ type: "varchar" })
    @IsString()
    title_ru: string

    @Column({ type: "varchar" })
    @IsString()
    title_en: string

    @Column({ type: "text" })
    @IsString()
    image: string

    @Column({ type: "text",nullable:true })
    @IsString()
    image2: string

    @Column({ type: "text",nullable:true })
    @IsString()
    image3: string

    @Column({ type: "text",nullable:true })
    @IsString()
    image4: string

    @ManyToOne(()=>CategoryBannerEntity,(category_banner)=>category_banner.banner,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    category_banner:CategoryBannerEntity

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}