/* eslint-disable prettier/prettier */
import { Cv } from 'src/cv/entities/cv.entity';
import { User } from 'src/user/entities/user.entity';
import { PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, Entity } from 'typeorm';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  designation: string;
  @ManyToMany(() => Skill)
  @JoinTable({
    name: 'cv_skill',
    joinColumn: {
      name: 'cv',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'skill',
      referencedColumnName: 'id',
    },
  })
  cv: Cv[];
}
