import { IsString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn} from "typeorm";


@Entity({ name: "banners" })
export class BannersEntity {
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

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}