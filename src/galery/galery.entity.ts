import { IsString } from "class-validator";
import { News } from "src/news/news.entity";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";


@Entity({ name: "galery" })
export class GaleryEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "text" })
    @IsString()
    image: string

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

    @ManyToOne(()=>News,(news)=>news.galery,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    news:News
}