import { IsString } from "class-validator";
import { ProgramsEntity } from "src/programs/programs.entity";
import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn, ManyToOne} from "typeorm";


@Entity({ name: "videos" })
export class VideosEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column({ type: "text",nullable:true })
    @IsString()
    link: string

    @ManyToOne(()=>ProgramsEntity,(programs)=>programs.videos,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    programs:ProgramsEntity

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;
}