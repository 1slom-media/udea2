import { IsString } from "class-validator";
import { ProgramsEntity } from "src/programs/programs.entity";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity("category")
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "varchar" })
    @IsString()
    category_uz: string

    @Column({ type: "varchar" })
    @IsString()
    category_ru: string

    @Column({ type: "varchar" })
    @IsString()
    category_en: string

    @OneToMany(()=>ProgramsEntity,(programs)=>programs.category)
    programs:ProgramsEntity[]

    @CreateDateColumn({ type: "timestamp" })
    createdAt: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt: Date;

}