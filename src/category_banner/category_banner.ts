import { IsString } from "class-validator";
import { BannersEntity } from "src/banners/banners.entity";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, OneToMany} from "typeorm";


@Entity({ name: "category_banner" })
export class CategoryBannerEntity {
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

    @OneToMany(()=>BannersEntity,(banner)=>banner.category_banner,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    banner:BannersEntity[]

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}